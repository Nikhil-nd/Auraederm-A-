# Auraederm Skin Solutions Website

Official website for **Auraederm Skin Solutions** and **Dr. Aishwarya Devaraj** (Clinical & Aesthetic Dermatologist), built with **React**, **Vite**, **TypeScript**, and **Tailwind CSS**.

---

# Overview

Auraederm Skin Solutions is a modern, responsive dermatology clinic website featuring:

- Hero section with clinic branding
- Doctor profile and experience highlights
- Clinical, aesthetic, and hair/scalp treatment services
- Before & After gallery
- Community welfare initiatives
- Contact and appointment request form
- Embedded Google Maps location
- Mobile floating call button

---

# Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4 (`@tailwindcss/vite`)
- Lucide React (Icons)

---

# Project Structure

```text
/home/runner/work/Auraederm_2.O/Auraederm_2.O
├── src
│   ├── assets
│   │   └── images
│   ├── components
│   │   ├── AboutSection.tsx
│   │   ├── BeforeAfterGallery.tsx
│   │   ├── CommunityWelfare.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   └── ServicesSection.tsx
│   ├── App.tsx
│   ├── data.ts
│   ├── main.tsx
│   └── types.ts
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── .env.example
```

---

# Prerequisites

Before running the project, ensure you have:

- Node.js 18 or later
- npm

---

# Installation

Clone the repository and install dependencies:

```bash
npm install
```

---

# Environment Variables

Copy the example environment file:

```bash
cp .env.example .env.local
```

Update `.env.local` with the required values:

```env
GEMINI_API_KEY=your_api_key
APP_URL=http://localhost:3000
```

> **Note:** The current frontend works without active Gemini integration. Environment variable support is included for future integrations.

---

# Running the Development Server

Start the Vite development server:

```bash
npm run dev
```

By default, the application runs at:

```
http://0.0.0.0:3000
```

---

# Available Scripts

| Command | Description |
|----------|-------------|
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run TypeScript type checking (`tsc --noEmit`) |
| `npm run clean` | Remove generated build/server artifacts |

---

# Content Management

Most clinic information is centralized in:

```text
src/data.ts
```

Update this file to modify:

- Clinic contact information
- Address and timings
- Services
- Experience and education
- Community welfare initiatives
- Testimonials
- Before & After gallery content
- Skincare routines

---

# Appointment Form

The appointment form located in `ContactSection.tsx` is currently **UI/local-state driven**.

- No backend API is connected.
- Form submissions are not persisted.

---

# Build for Production

Create an optimized production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

The generated files will be available in:

```text
dist/
```

---

# Features

- Responsive design
- Modern UI with Tailwind CSS
- Smooth scrolling navigation
- Service showcase
- Doctor profile
- Before & After gallery
- Community welfare section
- Contact form
- Embedded clinic map
- Mobile floating call button

---

# License

This is a private project.

**All rights reserved by the project owner.**
