# Full-Stack Engineer Portfolio

A modern, high-performance, dark-mode developer portfolio built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## ⚡ Instant Preview (Zero Install Required)

You can preview and test your portfolio immediately without installing anything:
1. Open File Explorer and navigate to:
   `C:\Users\munsh\.gemini\antigravity\scratch\portfolio\`
2. Double-click **`index.html`** to open it in Chrome, Edge, or your default browser.
3. Everything is fully functional (responsive navigation, interactive skills filtering, case study modals, contact form feedback, copy-to-clipboard, etc.).

---

## 🚀 Setting Up the Next.js Development Server

To run the full Next.js development server on your machine:

### 1. Install Node.js
If you haven't installed Node.js yet, you can install it in two ways:
- **Option A (Winget in Terminal / PowerShell):**
  ```powershell
  winget install OpenJS.NodeJS.LTS
  ```
- **Option B (Official Installer):**
  Download the LTS installer from [https://nodejs.org](https://nodejs.org) and run the setup.

### 2. Install Project Dependencies
Open your terminal in this directory (`C:\Users\munsh\.gemini\antigravity\scratch\portfolio`):
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠️ How to Customize Your Portfolio

All personal information, links, projects, and work experience are centralized in one single configuration file:

📁 **`data/portfolioData.ts`**

Simply update the fields in `data/portfolioData.ts`:
- **Name, Title & Tagline**: Change your personal branding and availability status.
- **Stats**: Update years of experience, production apps shipped, or open-source stars.
- **Projects**: Add your GitHub repositories, live demo URLs, tech tags, and performance metrics.
- **Skills**: Add or adjust proficiency levels and categories (Frontend, Backend, Cloud & DevOps).
- **Work Experience**: Add your past roles, companies, dates, and bullet achievements.
- **Socials & Email**: Update your GitHub, LinkedIn, Twitter/X, and direct email address.

---

## 🚢 1-Click Deployment to Vercel

The easiest way to put your portfolio live with a custom domain and free SSL:

1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio release"
   git remote add origin https://github.com/<your-username>/portfolio.git
   git push -u origin main
   ```
2. Go to [https://vercel.com/new](https://vercel.com/new).
3. Import your GitHub repository.
4. Click **Deploy**. Vercel will automatically build and publish your Next.js portfolio.

---

## 📁 Project Structure

```
portfolio/
├── index.html                 # Standalone instant browser preview
├── data/
│   └── portfolioData.ts       # Central data file (Edit this to customize!)
├── app/
│   ├── layout.tsx             # Root layout with meta tags & ambient glow
│   ├── page.tsx               # Main assembly page
│   └── globals.css            # Tailwind & glassmorphism styles
├── components/
│   ├── Navbar.tsx             # Responsive nav with glass blur & mobile drawer
│   ├── Hero.tsx               # Status badge, headline, and terminal mock
│   ├── BentoStats.tsx         # Modern bento grid for stats & philosophy
│   ├── Skills.tsx             # Filterable skills matrix with animated meters
│   ├── Projects.tsx           # Project cards & interactive case study modal
│   ├── Experience.tsx         # Career history timeline
│   ├── Contact.tsx            # Interactive message form & copy email
│   └── Footer.tsx             # Back to top & copyright
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```
