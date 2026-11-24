# Interactive Portfolio Resume Website

A modern, responsive, animated interactive portfolio and resume website built with **React**, **Vite**, **Tailwind CSS**, and **Lucide React**.

This project is a clean, 100% customizable from-scratch clone of the interactive portfolio template from [helijoshi.bolt.host](https://helijoshi.bolt.host).

---

## 🚀 Quick Start

### 1. Install Dependencies
Open your terminal in the project root directory and run:
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open your browser and navigate to the local address displayed (e.g. `http://localhost:5173`).

### 3. Build for Production
```bash
npm run build
```
The optimized production files will be generated in the `dist/` directory.

---

## ✏️ How to Customize with Your Own Information

All content is cleanly separated and centralized in a single configuration file:
👉 **`src/data/portfolioData.js`**

Open `src/data/portfolioData.js` in your editor to change:
1. **Personal Information**: Name, Title, Email, Phone number, Location status badge, Avatar image URL.
2. **Career Objective**: Title and statement with typewriter animation.
3. **Featured Project**: Title, achievements, preview card, and video/review links.
4. **Work Experience**: Roles, company names, dates, bullet points, and color accents.
5. **Education History**: Degrees, universities, affiliations, and graduation years.
6. **Core Skills**: Skill titles, descriptions, and gradient color themes.
7. **Languages**: Language names, proficiency levels, and gradient card styles.
8. **Professional Summary**: Bio paragraph with typewriter reveal effect.
9. **Experience Summary & Footer**: Quick stats cards, bio, and "Get In Touch" button.

### Adding Your Own Photo
- **Cloudinary / Web URL**: You can set any direct image URL in `personal.avatar` inside `src/data/portfolioData.js`.
- **Local File**: Place your image in the `public/` folder (e.g., `public/my-photo.jpg`) and set `avatar: "/my-photo.jpg"`.

---

## 📁 Project Structure

```
portfolio-clone/
├── index.html                   # HTML entry point
├── package.json                 # Dependencies and scripts
├── vite.config.js               # Vite build configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── postcss.config.js            # PostCSS configuration
├── public/                      # Static assets (favicons, images)
└── src/
    ├── main.jsx                 # React root mount
    ├── App.jsx                  # Main layout and scroll animation engine
    ├── index.css                # Tailwind directives and custom animation keyframes
    ├── data/
    │   └── portfolioData.js     # ⭐ Main data file for editing all portfolio details
    └── components/
        ├── Header.jsx           # Avatar, name, title, contact links
        ├── CareerObjective.jsx  # Career objective with typewriter effect
        ├── FeaturedProject.jsx  # Project spotlight & video showcase
        ├── WorkExperience.jsx   # Timeline of roles & responsibilities
        ├── Education.jsx        # Academic background timeline
        ├── CoreSkills.jsx       # 3D gradient skill cards
        ├── Languages.jsx        # Language proficiency cards
        ├── ProfessionalSummary.jsx # Dark contrast summary section
        └── Footer.jsx           # Experience recap cards & contact CTA
```

---

## 🎨 Features & Animations

- **Scroll-Triggered Reveals**: Elements animate into view smoothly as you scroll down the page.
- **Typewriter Effect**: Highlights key statements letter-by-letter as they enter the viewport.
- **Pulsing Avatar Glow**: Profile picture features a gradient ring animation and hover 3D scaling.
- **Interactive Cards**: Interactive tilt and shadow lift effects on skills and language badges.
- **Timeline Milestones**: Colored milestone nodes and hover borders for work and education timelines.
- **Fully Responsive**: Mobile-first layout that looks great on smartphones, tablets, and desktops.

---

## 🌐 Free Deployment Guide

### Deploy to Vercel (Recommended)
1. Push your repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework preset will automatically detect **Vite**. Click **Deploy**!

### Deploy to Netlify
1. Run `npm run build`.
2. Drag and drop the `dist/` folder into [Netlify Drop](https://app.netlify.com/drop), or link your GitHub repo with build command `npm run build` and publish directory `dist`.
