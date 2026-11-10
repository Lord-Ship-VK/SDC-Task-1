# 🚀 Android Club Showcase Website (2026-27)

Venkatesh Kalyane ([@Lord-Ship-VK](https://github.com/Lord-Ship-VK)) built this Vite, React, and Tailwind CSS site for Task 1 of the Software Development Cell application under Android Club at VIT Bhopal.

Club statistics, project examples, contact details, and the event timeline use sample data for the showcase.

![Theme](https://img.shields.io/badge/Theme-Android%20Emerald-3DDC84?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/Stack-React%20%7C%20Vite%20%7C%20TailwindCSS-090D0B?style=for-the-badge)

---

## 🎨 Design System & Theme

- **Background:** `#090D0B` (Deep obsidian black with subtle grid pattern)
- **Cards & Surfaces:** `#111915` (Deep emerald-tinted dark cards)
- **Primary Accent:** `#3DDC84` (Official Android Emerald)
- **Hover & Glows:** Interactive CSS glow borders and ambient radial illumination
- **Navbar:** Sticky glassmorphism backdrop (`backdrop-blur-xl`) with dynamic scroll shadows
- **Typography:** Inter (Headings & Body), JetBrains Mono (Terminal & Code Badges)

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
  - SDC Task 1 showcase badge
  - Typewriter terminal with a screen-reader transcript and instant text when reduced motion is enabled
  - Sample club stats for members, projects, hackathons, and wings
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
│   ├── App.jsx              # Core layout and IntersectionObserver scroll animations
│   ├── index.css            # Tailwind directives, custom glows, and glassmorphism
│   └── components/
│       ├── Navbar.jsx       # Glassmorphic header with mobile drawer
│       ├── Hero.jsx         # Hero section with stats and CTAs
│       ├── TerminalText.jsx # Interactive animated typewriter terminal
│       ├── About.jsx        # Club mission and core pillars
│       ├── Wings.jsx        # 4 interactive division tabs with tech badges
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
