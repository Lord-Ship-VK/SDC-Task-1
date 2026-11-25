# 🚀 Android Club Showcase Website (2026-27)

Venkatesh Kalyane ([@Lord-Ship-VK](https://github.com/Lord-Ship-VK)) built this Vite, React, and Tailwind CSS site for Task 1 of the Software Development Cell application under Android Club at VIT Bhopal.

Project examples, contact details, and the event timeline use sample data for the showcase.

![Theme](https://img.shields.io/badge/Theme-Material%20You%20Dusk-8AB4F8?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/Stack-React%20%7C%20Vite%20%7C%20TailwindCSS-0B0D12?style=for-the-badge)

---

## 🎨 Design System & Theme

Material You Dusk uses a dark canvas (`#0B0D12`) and layered surfaces (`#14171F`, `#1B1F29`). Blue (`#8AB4F8`) highlights actions, lilac (`#D0A3FF`) accents gradients, and Android green (`#3DDC84`) marks the logo and status dots. Geist and Geist Mono carry the interface and terminal text.

The hero combines a static mesh and grain with a glass phone. Its droid follows a fine pointer and sways on touch devices. Reduced-motion preferences disable both effects. Wing and project cards share a cursor-tracking spotlight.

---

## 🏛️ Architecture & Club Wings

The showcase presents four Android Club wings.

1. **📱 Android Team**
   - *Core Technologies:* Kotlin, Jetpack Compose, Flutter, Material 3, Firebase
   - *Scope:* Native & cross-platform apps, Compose architecture workshops, Play Store deployment.
2. **🌐 Software Development Cell (SDC)**
   - *Core Technologies:* React, Next.js, FastAPI, PostgreSQL, Docker, AWS
   - *Scope:* Campus enterprise software, student portals, high-throughput microservices.
3. **🛡️ R&D — Cyber Security, IoT & ML**
   - *Core Technologies:* Python, PyTorch, ESP32, Infosec, Wireshark, TensorFlow
   - *Scope:* CTF security audits, embedded IoT sensors, AI/ML models.
4. **🎨 UI/UX Design Wing**
   - *Core Technologies:* Figma, Design Systems, Prototyping, Motion Design
   - *Scope:* Design tokens, usability research, component libraries, developer handoff.

---

## 🧩 Key Features

- **⚡ Hero & Recruitment Terminal:**
  - Typewriter terminal with a screen-reader transcript and instant text when reduced motion is enabled
- **📂 Interactive Projects Showcase:**
  - Filter projects dynamically by category (`All`, `SDC Web`, `Android`, `R&D / ML`)
  - Share a filtered view with `/?track=sdc-web#projects`. The available tracks are `all`, `sdc-web`, `android`, and `rd-ml`.
- **🏆 Events & Hackathons Timeline:**
  - Responsive timeline with sample dates, attendance counts, and registration statuses
- **📬 Responsive Contact & Social Hub:**
  - Formspree submission with a local payload preview, persistent success feedback, and retry after an error
  - Link to the author’s GitHub profile

---

## 🛠️ Project Structure

```text
android-club-website/
├── index.html               # Entry HTML and font stylesheet
├── package.json             # Scripts & dependencies (React 19, Lucide, Tailwind)
├── postcss.config.js        # PostCSS pipeline
├── tailwind.config.js       # Custom theme colors, animations & font families
├── vite.config.js           # Vite build configuration
├── src/
│   ├── main.jsx             # React DOM root mounting
│   ├── App.jsx              # Page sections and navigation
│   ├── index.css            # Tailwind directives, mesh, grain, glass, and droid motion
│   └── components/
│       ├── Navbar.jsx       # Glassmorphic header with mobile drawer
│       ├── Hero.jsx         # Interactive droid, glass phone, and CTAs
│       ├── TerminalText.jsx # Interactive animated typewriter terminal
│       ├── About.jsx        # Club mission and core pillars
│       ├── WingsBento.jsx   # Responsive four-wing grid
│       ├── SpotlightCard.jsx # Pointer-reactive border and surface
│       ├── Projects.jsx     # Filterable project portfolio grid
│       ├── Events.jsx       # Hackathon and bootcamp timeline
│       ├── Contact.jsx      # Contact form, local preview, and submission feedback
│       └── Footer.jsx       # Multi-column footer and copyright
└── public/
    └── vite.svg             # Custom Android logo mark
```

---

## ⚡ Quickstart & Setup

### Prerequisites
- Node.js `v18+` or `v20+` (Tested on `v26.13.0`)
- npm

### 1. Clone & Navigate
```bash
cd android-club-website
```

### 2. Install Dependencies
```bash
npm ci
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### 4. Build for Production
```bash
npm run build
```

### 5. Preview Production Build
```bash
npm run preview
```
