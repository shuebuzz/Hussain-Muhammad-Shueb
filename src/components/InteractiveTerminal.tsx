import React, { useState, useEffect, useRef } from 'react';
import { X, Terminal as TerminalIcon, CornerDownLeft, Sparkles } from 'lucide-react';
import { siteContent } from '../data/siteContent';

interface InteractiveTerminalProps {
  isOpen: boolean;
  onClose: () => void;
  onUnlockSecret: () => void;
}

interface CommandHistoryItem {
  id: string;
  command: string;
  response: React.ReactNode;
}

export default function InteractiveTerminal({
  isOpen,
  onClose,
  onUnlockSecret,
}: InteractiveTerminalProps) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      id: 'welcome',
      command: 'init',
      response: (
        <div className="text-slate-300 space-y-1">
          <p className="text-cyan-400 font-semibold">SHUEB.DEV OS [Version 2.0.26-UK]</p>
          <p className="text-xs text-slate-400">
            Welcome to the digital terminal of <span className="text-white font-medium">Hussain Muhammad Shueb</span>.
          </p>
          <p className="text-xs text-slate-400">
            Type <span className="text-cyan-300 font-mono">help</span> to view available system commands or try <span className="text-cyan-300 font-mono">sudo universe</span>.
          </p>
        </div>
      ),
    },
  ]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [commandList, setCommandList] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const terminalEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  // Global keydown to close on ESC or open on backtick
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    setCommandList((prev) => [...prev, cmd]);
    setHistoryIndex(-1);

    let output: React.ReactNode;

    switch (cmd) {
      case 'help':
        output = (
          <div className="space-y-1 text-xs">
            <p className="text-cyan-400 font-medium mb-1">AVAILABLE PROTOCOLS:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 font-mono">
              <div><span className="text-cyan-300">about</span> — Identity & study overview</div>
              <div><span className="text-cyan-300">skills</span> — Tech matrix and areas of study</div>
              <div><span className="text-cyan-300">projects</span> — Laboratory experiment status</div>
              <div><span className="text-cyan-300">hobbies</span> — The three creative dimensions</div>
              <div><span className="text-cyan-300">evolution</span> — Academic & growth timeline</div>
              <div><span className="text-cyan-300">contact</span> — Connection coordinates</div>
              <div><span className="text-cyan-300">sudo universe</span> — Access classified frequency</div>
              <div><span className="text-cyan-300">clear</span> — Purge terminal history</div>
              <div><span className="text-cyan-300">exit</span> — Close terminal interface</div>
            </div>
          </div>
        );
        break;

      case 'about':
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <p><span className="text-cyan-400 font-semibold">{siteContent.personal.name}</span></p>
            <p>{siteContent.personal.fullBio}</p>
            <p className="text-slate-400">Current Location: {siteContent.personal.currentLocation} · Origin: {siteContent.personal.origin}</p>
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <p className="text-cyan-400 font-medium">CORE & EXPLORING TECHNOLOGIES:</p>
            <p className="text-slate-300">
              {siteContent.skills.map((s) => `${s.name} [${s.status}]`).join(' · ')}
            </p>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <p className="text-cyan-400 font-medium">THE LABORATORY:</p>
            {siteContent.projects.length === 0 ? (
              <p className="italic text-slate-400">{siteContent.worlds.code.emptyStateText}</p>
            ) : (
              siteContent.projects.map((p) => (
                <div key={p.id}>
                  • <span className="text-white font-medium">{p.title}</span> — {p.tagline} ({p.status})
                </div>
              ))
            )}
          </div>
        );
        break;

      case 'hobbies':
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <p className="text-cyan-400 font-medium">THE THREE WORLDS:</p>
            <p>1. <span className="text-white font-medium">Coding</span> — Designing software architectures and engineering solutions.</p>
            <p>2. <span className="text-white font-medium">Photography</span> — Capturing visual atmosphere and geometry through my lens.</p>
            <p>3. <span className="text-white font-medium">Music</span> — Acoustic resonance and soundtracks for flow state.</p>
          </div>
        );
        break;

      case 'evolution':
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <p className="text-cyan-400 font-medium">ACADEMIC & DEV EVOLUTION:</p>
            {siteContent.timeline.map((item) => (
              <p key={item.id}>
                [{item.year}] <span className="text-white font-medium">{item.title}</span> — {item.institutionOrContext}
              </p>
            ))}
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <p className="text-cyan-400 font-medium">COMMUNICATION CHANNELS:</p>
            <p>Email: <a href={`mailto:${siteContent.socialLinks.email}`} className="text-cyan-300 underline">{siteContent.socialLinks.email}</a></p>
            {siteContent.socialLinks.github && (
              <p>GitHub: <a href={siteContent.socialLinks.github} target="_blank" rel="noreferrer" className="text-cyan-300 underline">{siteContent.socialLinks.github}</a></p>
            )}
          </div>
        );
        break;

      case 'sudo universe':
        output = (
          <div className="space-y-1 text-xs text-cyan-300 animate-pulse">
            <p className="font-bold text-white flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              AUTHORIZATION GRANTED // UNLOCKING COSMIC PORTAL...
            </p>
            <p className="text-slate-400">Loading Secret Universe interface...</p>
          </div>
        );
        setTimeout(() => {
          onUnlockSecret();
        }, 600);
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'exit':
      case 'quit':
        onClose();
        setInput('');
        return;

      default:
        output = (
          <p className="text-rose-400 text-xs">
            command not found: '{rawCmd}'. Type <span className="text-cyan-300 font-mono">help</span> for recognized system directives.
          </p>
        );
    }

    setHistory((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        command: rawCmd,
        response: output,
      },
    ]);
    setInput('');
  };

  const handleKeyDownInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandList.length === 0) return;
      const nextIndex = historyIndex === -1 ? commandList.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInput(commandList[nextIndex]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex === -1) return;
      if (historyIndex < commandList.length - 1) {
        const nextIndex = historyIndex + 1;
        setHistoryIndex(nextIndex);
        setInput(commandList[nextIndex]);
      } else {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label="Command Terminal"
    >
      <div 
        className="w-full max-w-2xl bg-[#070e24] border border-[#1677FF]/40 rounded-xl shadow-2xl shadow-blue-950/80 overflow-hidden flex flex-col max-h-[85vh] transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header Bar */}
        <div className="bg-[#050914] px-4 py-2.5 border-b border-[#1677FF]/25 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <TerminalIcon className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-mono font-medium text-slate-300">
              shueb@dev-universe:~ (v2.0.26)
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono text-slate-500 hidden sm:inline">ESC to close</span>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800/60 transition-colors"
              aria-label="Close terminal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Command Shortcuts for Mobile / Convenience */}
        <div className="px-4 py-2 bg-[#091330]/60 border-b border-[#1677FF]/15 flex items-center gap-1.5 overflow-x-auto text-[11px] font-mono scrollbar-none">
          <span className="text-slate-500 shrink-0">Quick:</span>
          {['about', 'skills', 'projects', 'hobbies', 'sudo universe', 'clear'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-2 py-0.5 rounded bg-slate-900 border border-slate-700/80 text-cyan-300 hover:border-[#1677FF] hover:bg-slate-800 transition-colors shrink-0"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Body */}
        <div className="p-4 overflow-y-auto space-y-3 font-mono text-xs text-slate-200 flex-1 min-h-[220px]">
          {history.map((item) => (
            <div key={item.id} className="space-y-1">
              <div className="flex items-center gap-2 text-cyan-400">
                <span className="text-slate-500">$</span>
                <span className="text-white font-semibold">{item.command}</span>
              </div>
              <div className="pl-4 text-slate-300 leading-relaxed">{item.response}</div>
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        {/* Input Line */}
        <div className="p-3 bg-[#050914] border-t border-[#1677FF]/25 flex items-center gap-2 font-mono text-xs">
          <span className="text-[#00D8FF] font-bold">guest@shueb.dev:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDownInput}
            placeholder="Type 'help' or command..."
            className="flex-1 bg-transparent border-none text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-0"
            autoFocus
          />
          <button
            onClick={() => handleCommand(input)}
            disabled={!input.trim()}
            className="text-slate-400 hover:text-cyan-300 disabled:opacity-40 p-1"
            aria-label="Execute command"
          >
            <CornerDownLeft className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
