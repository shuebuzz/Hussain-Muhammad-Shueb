# SHUEB.DEV — Digital Universe Portfolio

Welcome to the personal digital universe of **Hussain Muhammad Shueb** (**SHUEB.DEV**), built with React, TypeScript, Tailwind CSS, and Lucide React.

---

## 🚀 Quick Start Guide

### 1. Requirements
Ensure you have [Node.js](https://nodejs.org/) installed (version 18+ recommended).

### 2. Installation
Clone the repository and install the dependencies:
```bash
npm install
```

### 3. Running Locally
Start the development server:
```bash
npm run dev
```
Open your browser at `http://localhost:3000` to explore the digital universe.

### 4. Production Build
```bash
npm run build
```
Test the production build locally:
```bash
npm run preview
```

---

## 🛠️ Customization & Central Content Configuration

All textual content, links, projects, photography, and music records are centrally managed in a single, well-commented configuration file:

📁 **`src/data/siteContent.ts`**

### Editing Your Personal Information
Open `src/data/siteContent.ts` and modify the `personal` block:
```ts
personal: {
  name: 'Hussain Muhammad Shueb',
  brand: 'SHUEB.DEV',
  age: 21,
  origin: 'Bangladesh',
  currentLocation: 'United Kingdom',
  university: 'University College Birmingham',
  degree: 'BSc (Hons) Computer Science',
  year: '2nd Year Student',
  goal: 'Software Developer',
  ...
}
```

### Adding Projects to "The Laboratory"
Add your real project items to `projects: [...]` in `src/data/siteContent.ts`:
```ts
projects: [
  {
    id: 'portfolio-v2',
    title: 'SHUEB.DEV Universe',
    tagline: 'Futuristic personal digital portfolio & operating system',
    description: 'A cinematic digital portfolio built with React, TypeScript, and Tailwind CSS.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    status: 'Completed', // 'Exploring' | 'In Development' | 'Completed'
    githubUrl: 'https://github.com/your-username/your-repo',
    demoUrl: 'https://shueb.dev',
  }
]
```
*Note: If `githubUrl` or `demoUrl` is omitted or empty, the corresponding button is automatically hidden.*

### Adding Photographs to the "Darkroom"
1. Place your photo files inside `src/assets/images/`.
2. Import the image in `src/data/siteContent.ts`.
3. Add an entry to the `photography: [...]` list:
```ts
photography: [
  {
    id: 'frame-1',
    title: 'Urban Geometry',
    caption: 'Long exposure of architecture at twilight.',
    category: 'Architecture',
    location: 'Birmingham, UK',
    date: '2026',
    cameraInfo: {
      camera: 'Sony A7 / iPhone',
      lens: '35mm f/1.8',
      iso: '100',
    },
    src: myPhotoImage,
  }
]
```

### Adding Music to "The Frequency Corner"
Add your favourite songs or soundtracks to `music: [...]` in `src/data/siteContent.ts`:
```ts
music: [
  {
    id: 'song-1',
    title: 'Midnight City',
    artist: 'M83',
    album: 'Hurry Up, We\'re Dreaming',
    personalNote: 'Coding soundtrack for deep focus at night.',
    tag: 'Electronic / Synthwave',
    spotifyUrl: 'https://open.spotify.com/track/1eyzqe2QqGZUmfcPZtrIyt',
  }
]
```

### Updating Social Links
In `src/data/siteContent.ts`:
```ts
socialLinks: {
  github: 'https://github.com/your-username',
  linkedin: 'https://linkedin.com/in/your-profile',
  instagram: 'https://instagram.com/your-handle',
  email: 'hussainmuhammadshueb8@gmail.com',
}
```
*Leave any link as `""` (empty string) to cleanly hide it from the UI.*

---

## ⚡ Secret Universe Easter Egg

The digital universe contains a hidden sector! You can access it by:
1. Opening the **Terminal** (via the navigation button or pressing the backtick key `` ` `` or `Ctrl+K`).
2. Typing:
   ```bash
   sudo universe
   ```
3. Or clicking the subtle glowing sparkle icon in the hero banner.

---

## 📬 Contact Form & Backend Setup

By default, the contact form validates input client-side and formats a clean `mailto:` URI, opening the visitor's email client directly with all fields prefilled for guaranteed delivery without needing a server.

### Connecting an Optional Serverless Backend (e.g. Formspree or Resend)
To send messages directly to your inbox via an API:
1. Create a free account at [Formspree](https://formspree.io) or [Resend](https://resend.com).
2. Create a form endpoint (e.g. `https://formspree.io/f/your_form_id`).
3. In `src/sections/ContactSection.tsx`, uncomment the `fetch` POST request in `handleSubmit`.

---

## 🌐 Deploying to Vercel

1. Push your repository to **GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of SHUEB.DEV Universe"
   git remote add origin https://github.com/<your-username>/shueb-dev.git
   git push -u origin main
   ```
2. Log in to [Vercel](https://vercel.com).
3. Click **"Add New Project"** and select your GitHub repository.
4. Vercel automatically detects **Vite**:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**. Your digital universe will be live in seconds!
