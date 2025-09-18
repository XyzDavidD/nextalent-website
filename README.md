# nextalent Website

A modern, AI-driven platform website for nextalent - revolutionizing football team building through artificial intelligence.

## 🚀 Features

- **Modern Design**: Sleek, professional design with glassmorphism effects
- **Responsive**: Fully responsive across all devices
- **Animations**: Smooth animations using Framer Motion
- **Contact Form**: Functional contact form using FormSubmit
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **Performance**: Optimized for fast loading and smooth user experience

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: Vercel

## 📁 Project Structure

```
/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Navigation.tsx
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── PlatformSection.tsx
│   └── ContactSection.tsx
├── public/
│   ├── favicon.png
│   ├── logo.png
│   ├── hero-ball.png
│   ├── stadium.png
│   └── README.md
└── [config files]
```

## 🖼 Assets Status

✅ All required PNG images are already included in the `/public` folder:

1. **favicon.png** - Website favicon (32x32 or 64x64px)
2. **logo.png** - nextalent logo for header
3. **hero-ball.png** - Soccer ball for hero section
4. **stadium.png** - Stadium image for contact section

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Images are ready:**
   - All required PNG images are already in the `/public` folder
   - See `/public/README.md` for details

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📧 Contact Form Setup

The contact form is configured to use FormSubmit with the email: `infotct@alice.it`

To customize:
1. Update the email in `components/ContactSection.tsx`
2. Or set `NEXT_PUBLIC_CONTACT_EMAIL` in your environment variables

## 🚀 Deployment on Vercel

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel:**
   - Connect your GitHub repository
   - Vercel will automatically detect Next.js
   - Click deploy

3. **Add your images:**
   - Upload your PNG images to the `/assets` folder
   - Redeploy if needed

## 🎨 Customization

### Colors
The website uses a cyan/blue gradient theme. To customize colors, edit:
- `tailwind.config.js` - Update the primary color palette
- `app/globals.css` - Modify CSS custom properties

### Content
Update content in the respective component files:
- `HeroSection.tsx` - Hero content and tagline
- `AboutSection.tsx` - About us information
- `PlatformSection.tsx` - Platform features and description
- `ContactSection.tsx` - Contact information

### Animations
Animations are powered by Framer Motion. Customize in each component file.

## 📱 Mobile Responsive

The website is fully responsive with:
- Mobile-first design approach
- Responsive navigation menu
- Optimized layouts for all screen sizes
- Touch-friendly interactions

## ⚡ Performance

- Optimized images with Next.js Image component
- Lazy loading for better performance
- Minimized bundle size
- Fast loading animations

## 🔧 Development

```bash
# Development
npm run dev

# Build
npm run build

# Start production server
npm start

# Lint
npm run lint
```

## 📄 License

© 2024 nextalent. All rights reserved.

---

Built with ❤️ for the future of football team building.
