# Lakshya — SSB Prep Platform

> *"Every officer began with a dream. Lakshya is where that dream gets structure."*

A full-stack SSB preparation platform built for Indian defence aspirants. Combines AI-powered tools, curated study resources, defence analysis, and community features — all in one place.

---

## What is Lakshya?

Lakshya is a comprehensive web platform for aspirants preparing for the Services Selection Board (SSB). It brings together everything a candidate needs — from AI psych test analysis and PIQ evaluation to daily defence news, study materials, SSB board information, and a motivational ecosystem — without the ₹40k coaching fee.

---

## Features

### 🧠 AI-Powered Tools
- **AI Psych Analyzer** — Analyze TAT, WAT, SRT, SD responses against the 15 OLQ framework
- **PIQ Analyzer** — Upload your PIQ form and get an AI-extracted psychological profile with OLQ mapping
- **AI Chatbot** — Ask anything about SSB prep, OLQs, defence current affairs

### 📚 Study & Resources
- **Study Materials** — Curated resources for written and SSB rounds
- **Video Resources** — Handpicked video content for SSB preparation
- **SSB Tips Carousel** — Quick, actionable tips for every stage of SSB

### 🗞️ Defence Analysis
- **Daily News** — Defence and geopolitical news updated regularly
- **Defence Analysis** — In-depth articles on military strategy, maritime security, and geopolitics
- **Research Papers** — Upload and access community research papers on defence topics

### 🗺️ SSB Information
- **SSB Boards** — Information on all SSB selection centres across India
- **Journey Timeline** — Visual breakdown of the full SSB process
- **What SSB Demands** — OLQ-based breakdown of what assessors look for

### 🤝 Community
- **WhatsApp Community** — Connect with fellow aspirants
- **Telegram Channel** — Daily updates and resources
- **Contact** — Reach out directly

### ✨ Experience
- Cinematic intro with audio on first visit
- Parallax scrolling background
- Scroll progress indicator
- Smooth scroll-to-top
- Fully responsive — mobile first

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 + TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| UI Components | shadcn/ui |
| Backend / DB | Supabase |
| AI | Google Gemini (via Supabase Edge Functions) |
| Deployment | Vercel |

---

## Getting Started

### Prerequisites
- Node.js 18+
- A Supabase project
- Google Gemini API key

### Installation

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate into the project
cd LAKSHYAAAA-main

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

The Gemini API key is configured on the Supabase Edge Function side — not exposed on the frontend.

---

## Project Structure

```
src/
├── assets/          # Images, audio, insignia
├── components/      # All UI components
│   ├── ui/          # shadcn/ui base components
│   ├── Hero.tsx
│   ├── AIPsychAnalyzer.tsx
│   ├── PiqAnalyzer.tsx
│   ├── AIChatbot.tsx
│   ├── DailyNews.tsx
│   ├── StudyMaterials.tsx
│   └── ...
├── pages/           # Route-level pages
│   ├── Index.tsx          # Home page
│   ├── DefenceAnalysis.tsx
│   ├── ArticlePage.tsx
│   └── ResearchPapers.tsx
├── data/            # Static data (articles, boards, etc.)
├── integrations/    # Supabase client setup
└── App.tsx
```

---

## Deployment

The project is deployed on **Vercel**. Any push to the main branch auto-deploys.

For Supabase Edge Functions:
```bash
supabase functions deploy analyze
```

---

## Contributing

This is a solo project built for the SSB aspirant community. If you find bugs or have feature suggestions, feel free to open an issue or reach out.

---

## License

MIT — free to use, modify, and build upon.

---

*Built with purpose. For those who chose the harder path.*
