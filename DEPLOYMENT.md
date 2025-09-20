# nextalent Website Deployment Guide

## 🚀 Deploy to Vercel

### Prerequisites
1. ✅ GitHub repository created and pushed
2. ✅ Vercel account (free at vercel.com)

### Deployment Steps

1. **Connect GitHub to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with your GitHub account
   - Click "New Project"
   - Import your `nextalent-website` repository

2. **Configure Build Settings:**
   - Framework Preset: **Next.js**
   - Root Directory: **/** (leave default)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)
   - Install Command: `npm install` (auto-detected)

3. **Environment Variables (if needed):**
   - No environment variables required for this project
   - All assets are served from `/public` folder

4. **Deploy:**
   - Click "Deploy"
   - Wait for build to complete (2-3 minutes)
   - Your website will be live at `https://your-project-name.vercel.app`

### Post-Deployment

1. **Custom Domain (Optional):**
   - Go to your project settings in Vercel
   - Add your custom domain
   - Follow DNS configuration instructions

2. **Performance:**
   - Your website is optimized for production
   - Images are automatically optimized by Vercel
   - Static files are served from CDN

## 📁 Project Structure

```
nextalent-website/
├── app/                 # Next.js app directory
├── components/          # React components
├── public/             # Static assets (images, favicon)
├── tailwind.config.js  # Tailwind configuration
├── next.config.js      # Next.js configuration
└── package.json        # Dependencies
```

## 🎨 Features

- ✅ Fully responsive design
- ✅ Modern glassmorphism effects
- ✅ Smooth animations with Framer Motion
- ✅ Functional contact form with FormSubmit
- ✅ SEO optimized
- ✅ Production ready
- ✅ Fast loading performance

## 🔧 Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Forms:** React Hook Form + FormSubmit
- **Deployment:** Vercel
- **Language:** TypeScript

---

Your nextalent website is ready for the world! 🌟

