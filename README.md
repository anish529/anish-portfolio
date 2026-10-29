# Anish Kumar Prajapati — Java Backend Developer Portfolio

A professional, recruiter-ready developer portfolio built with **Next.js 16**, **React 19**, **Tailwind CSS**, and **SCSS**. It showcases my skills as an aspiring Java Backend Developer, featuring my projects, education, certifications, and contact information.

---

## 🔗 Live Portfolio

> Deploy to Vercel, Netlify, or any Node.js host. See [Deployment](#deployment).

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| UI Library | React 19 |
| Styling | Tailwind CSS + SCSS |
| Animations | Lottie (lottie-react), CSS transitions |
| Skills Marquee | react-fast-marquee |
| Icons | react-icons |
| Contact Email | Nodemailer (Gmail SMTP) |
| Contact Notify | Telegram Bot API |
| Form Feedback | react-toastify |
| Analytics | Google Tag Manager (optional) |
| Runtime | Node.js 18+ |

---

## ✅ Prerequisites

- **Node.js** 18 or newer — [nodejs.org](https://nodejs.org)
- **npm** (comes with Node.js)
- A Gmail account with an [App Password](https://myaccount.google.com/apppasswords) for the contact form

---

## 🚀 Installation & Running Locally

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd developer-portfolio

# 2. Install dependencies
npm install

# 3. Set up environment variables (see section below)
cp .env.example .env.local
# Edit .env.local with your real values

# 4. Start the development server
npm run dev
# → http://localhost:3000
```

---

## ⚙️ Environment Variables

Copy `.env.example` to `.env.local` and fill in these values:

```env
# Required for the contact form to send emails
EMAIL_ADDRESS=your-gmail@gmail.com
GMAIL_PASSKEY=your-app-password

# Required for the contact form API
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Optional — Telegram notifications when someone contacts you
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=

# Optional — Google Tag Manager analytics
NEXT_PUBLIC_GTM=

# Optional — your deployed site URL (for Open Graph metadata)
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# Optional — set once verified; shows GitHub/LinkedIn icons
NEXT_PUBLIC_GITHUB_URL=https://github.com/your-username
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/your-profile
```

> ⚠️ **Never commit `.env.local` to Git.** It is listed in `.gitignore`.

---

## 📝 How to Update Profile Information

All personal data is centralised in:

```
utils/data/personal-data.js    ← name, email, phone, designation, bio
utils/data/educations.js       ← education entries
utils/data/experience.js       ← certifications & achievements
utils/data/projects-data.js    ← project cards
utils/data/skills.js           ← skills shown in the icon marquee
utils/data/contactsData.js     ← contact section data
```

Edit these files directly. The components read from them automatically.

---

## 🎯 How to Update Projects

Open [`utils/data/projects-data.js`](utils/data/projects-data.js) and edit the array. Each project has:

```js
{
    id: 1,
    name: 'Project Name',
    description: "Short description...",
    tools: ['Java', 'Spring Boot'],
    role: 'Backend Developer',
    code: '',           // GitHub URL — leave blank if not public
    demo: '',           // Live demo URL — leave blank if none
    status: 'In Progress',   // or 'Completed'
    period: 'October 2026',
    highlights: ['Feature 1', 'Feature 2'],
}
```

---

## 📄 How to Add / Update Your Resume

Place your updated PDF at:

```
public/resume.pdf
```

The **Download Resume** button in the hero section and the footer link both point to `/resume.pdf`. The current file `public/resume.pdf` is your `ANISH JAVA RESUME.pdf` copied from the Desktop.

---

## 🔧 How to Configure the Contact Form

The contact form sends messages via Gmail SMTP and optionally via Telegram:

1. Go to [Google App Passwords](https://myaccount.google.com/apppasswords)
2. Create an App Password for "Mail" on your Gmail account
3. Add it to `.env.local`:
   ```
   EMAIL_ADDRESS=prajapatianish437@gmail.com
   GMAIL_PASSKEY=xxxx-xxxx-xxxx-xxxx
   ```
4. Optionally create a Telegram bot via [@BotFather](https://t.me/BotFather) and add the token + your chat ID

The API route is at `app/api/contact/route.js`. It requires **both** Telegram token and chat ID, or it returns a 400 error — update the condition if you only want email.

---

## 🔗 How to Enable GitHub & LinkedIn Icons

Set these in `.env.local`:

```env
NEXT_PUBLIC_GITHUB_URL=https://github.com/your-username
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/your-profile
```

The icons appear in the Hero and Contact sections automatically.

---

## 🏗️ Build & Validate

```bash
# Lint
npm run lint

# Production build
npm run build

# Start production server
npm run start
```

---

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import the repo at [vercel.com](https://vercel.com)
3. Add all environment variables from `.env.example` in the Vercel dashboard
4. Deploy — Vercel detects Next.js automatically

### Netlify
1. Set build command: `npm run build`
2. Set publish directory: `.next`
3. Install the [Netlify Next.js plugin](https://docs.netlify.com/integrations/frameworks/next-js/)
4. Add environment variables in the Netlify dashboard

---

## 📁 Project Structure

```
developer-portfolio/
├── app/
│   ├── api/contact/route.js      # Contact form API (email + Telegram)
│   ├── components/
│   │   ├── homepage/
│   │   │   ├── about/            # About section
│   │   │   ├── contact/          # Contact form + info
│   │   │   ├── education/        # Education cards
│   │   │   ├── experience/       # Achievements & certifications
│   │   │   ├── hero-section/     # Hero with Java code snippet
│   │   │   ├── projects/         # Project cards
│   │   │   └── skills/           # Skill groups + marquee
│   │   ├── footer.jsx
│   │   └── navbar.jsx            # Responsive nav with mobile menu
│   ├── css/
│   ├── layout.js                 # SEO metadata, fonts, viewport
│   └── page.js                   # Home page (server component)
├── utils/
│   └── data/                     # All personal data files
├── public/
│   └── resume.pdf                # Your resume (ANISH JAVA RESUME.pdf)
├── .env.example                  # Safe template for environment vars
└── README.md
```

---

## 👤 About

**Anish Kumar Prajapati**  
Aspiring Java Backend Developer  
Chittaurgarh, Rajasthan, India  
📧 prajapatianish437@gmail.com  
📞 +91-9171357320
