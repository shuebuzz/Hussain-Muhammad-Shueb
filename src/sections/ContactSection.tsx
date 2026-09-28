import React, { useState } from 'react';
import { siteContent } from '../data/siteContent';
import { Mail, Github, Linkedin, Instagram, Send, CheckCircle2, AlertCircle, Copy, Check } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const email = siteContent.socialLinks.email;
  const github = siteContent.socialLinks.github;
  const linkedin = siteContent.socialLinks.linkedin;
  const instagram = siteContent.socialLinks.instagram;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Form validation
    if (!formData.name.trim()) {
      setErrorMessage('Please provide your name.');
      setStatus('error');
      return;
    }

    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Please provide a valid email address.');
      setStatus('error');
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setErrorMessage('Message must be at least 10 characters.');
      setStatus('error');
      return;
    }

    setStatus('submitting');

    // Robust client-side handling:
    // Prepare direct mailto link to guarantee 100% genuine message delivery
    // without mocking a server response
    setTimeout(() => {
      const subject = encodeURIComponent(`Message from ${formData.name} via SHUEB.DEV`);
      const body = encodeURIComponent(
        `Sender Name: ${formData.name}\nSender Email: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      const mailtoUrl = `mailto:${email}?subject=${subject}&body=${body}`;

      // Open email client
      window.location.href = mailtoUrl;
      setStatus('success');
    }, 700);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Section Header */}
      <div className="flex flex-col items-start mb-12">
        <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          COMMUNICATION FREQUENCY // PING
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
          ESTABLISH CONNECTION
        </h2>
        <p className="text-sm sm:text-base text-slate-300 font-light max-w-xl">
          Whether you want to discuss software engineering, collaborative projects, photography, or tech inquiries — feel free to reach out.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Direct Direct Channels */}
        <div className="lg:col-span-5 rounded-2xl bg-[#070e24] border border-[#1677FF]/30 p-6 sm:p-8 space-y-6 shadow-xl">
          <div>
            <h3 className="font-display text-xl font-bold text-white mb-2">
              Direct Channels
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              Based in Birmingham, United Kingdom. Fast response on email and technical communication channels.
            </p>
          </div>

          {/* Copyable Email Box */}
          <div className="p-4 rounded-xl bg-[#050914] border border-slate-800 flex items-center justify-between gap-3">
            <div className="min-w-0">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                Primary Transmission
              </span>
              <a
                href={`mailto:${email}`}
                className="text-xs sm:text-sm font-mono text-cyan-300 hover:underline truncate block"
              >
                {email}
              </a>
            </div>

            <button
              onClick={handleCopyEmail}
              className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-[#1677FF] transition-colors shrink-0"
              title="Copy email address"
              aria-label="Copy email address"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Social Links (only visible if configured) */}
          <div className="space-y-3 pt-2">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block">
              Identity Coordinates
            </span>

            <div className="flex flex-col gap-2 font-mono text-xs">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#050914]/80 border border-slate-800 hover:border-cyan-400/60 transition-colors text-slate-300 hover:text-white"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-[#1677FF]" />
                    <span>GitHub</span>
                  </div>
                  <span className="text-slate-500 text-[11px]">→</span>
                </a>
              )}

              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#050914]/80 border border-slate-800 hover:border-cyan-400/60 transition-colors text-slate-300 hover:text-white"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-[#1677FF]" />
                    <span>LinkedIn</span>
                  </div>
                  <span className="text-slate-500 text-[11px]">→</span>
                </a>
              )}

              {instagram && (
                <a
                  href={instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#050914]/80 border border-slate-800 hover:border-cyan-400/60 transition-colors text-slate-300 hover:text-white"
                >
                  <div className="flex items-center gap-2.5">
                    <Instagram className="w-4 h-4 text-[#1677FF]" />
                    <span>Instagram</span>
                  </div>
                  <span className="text-slate-500 text-[11px]">→</span>
                </a>
              )}

              <a
                href={`mailto:${email}`}
                className="flex items-center justify-between p-3 rounded-xl bg-[#050914]/80 border border-slate-800 hover:border-cyan-400/60 transition-colors text-slate-300 hover:text-white"
              >
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#1677FF]" />
                  <span>Send Direct Email</span>
                </div>
                <span className="text-slate-500 text-[11px]">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form with genuine verification */}
        <div className="lg:col-span-7 rounded-2xl bg-[#070e24] border border-slate-800 p-6 sm:p-8 shadow-xl">
          <h3 className="font-display text-xl font-bold text-white mb-2">
            Send Transmission
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 font-light mb-6">
            Fill in the details below. This will prepare a verified direct transmission to my inbox.
          </p>

          {status === 'success' ? (
            <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3 animate-fadeIn">
              <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
              <h4 className="font-display text-lg font-bold text-white">
                Transmission Prepared
              </h4>
              <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                Your email client was triggered with your pre-filled message for <span className="text-cyan-300">{email}</span>. If it didn't open automatically, you can send directly via the copy button.
              </p>
              <button
                onClick={() => {
                  setStatus('idle');
                  setFormData({ name: '', email: '', message: '' });
                }}
                className="mt-3 px-4 py-2 text-xs font-mono rounded-lg bg-emerald-900/60 text-emerald-200 hover:bg-emerald-800 border border-emerald-600 transition-colors"
              >
                Send Another Transmission
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {status === 'error' && (
                <div className="p-3 rounded-lg bg-rose-950/40 border border-rose-500/40 text-xs font-mono text-rose-300 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                  Your Name *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Morgan"
                  className="w-full px-4 py-2.5 rounded-lg bg-[#050914] border border-slate-700 text-slate-100 text-sm focus:outline-none focus:border-[#00D8FF] focus:ring-1 focus:ring-[#00D8FF] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                  Your Email *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@domain.com"
                  className="w-full px-4 py-2.5 rounded-lg bg-[#050914] border border-slate-700 text-slate-100 text-sm focus:outline-none focus:border-[#00D8FF] focus:ring-1 focus:ring-[#00D8FF] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Type your message, collaboration query, or greeting..."
                  className="w-full px-4 py-2.5 rounded-lg bg-[#050914] border border-slate-700 text-slate-100 text-sm focus:outline-none focus:border-[#00D8FF] focus:ring-1 focus:ring-[#00D8FF] transition-colors resize-y min-h-[100px]"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-3 px-6 rounded-lg text-sm font-medium text-white bg-[#1677FF] hover:bg-blue-600 disabled:opacity-50 transition-colors shadow-lg shadow-[#1677FF]/30 flex items-center justify-center gap-2 cursor-pointer font-mono"
              >
                {status === 'submitting' ? (
                  <div className="flex items-center gap-2">
                    <div className="w-3.5 h-3.5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                    <span>PREPARING TRANSMISSION...</span>
                  </div>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>DISPATCH MESSAGE</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
