# Portfolio Website - Mohammad Jafar Saberi

A high-performance, modern portfolio website built with Next.js 16 and Static Site Generation (SSG) for optimal speed and SEO. Features a beautiful, responsive design with smooth animations and a dark theme.

🌐 **Live Site**: [https://jafar-saberi-portfolio.netlify.app/](https://jafar-saberi-portfolio.netlify.app/)

## 🚀 Features 

- **⚡ Lightning Fast**: Static Site Generation (SSG) for instant page loads
- **🎨 Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **📱 Fully Responsive**: Optimized for all devices and screen sizes
- **🌙 Dark Mode**: Beautiful dark theme with smooth transitions
- **🖼️ Optimized Images**: Automatic image optimization with Next.js Image
- **🔍 SEO Optimized**: Pre-rendered content for better search engine visibility
- **♿ Accessible**: Built with accessibility best practices
- **🎭 Smooth Animations**: Fade-in and scroll animations for enhanced UX

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) (Radix UI)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Poppins (headings) & Roboto (body) via `next/font/google`
- **Deployment**: Optimized for Vercel, Netlify, and static hosting

## 📋 Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

## 🏃 Getting Started

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
my-portfolio/
├── app/
│   ├── layout.tsx      # Root layout with fonts and metadata
│   ├── page.tsx        # Main portfolio page
│   └── globals.css     # Global styles and CSS variables
├── components/
│   ├── Navbar.tsx      # Navigation bar with mobile menu
│   ├── Hero.tsx        # Hero section with introduction
│   ├── About.tsx       # About section with skills
│   ├── Projects.tsx    # Projects showcase
│   ├── ProjectCard.tsx  # Individual project card component
│   ├── Footer.tsx       # Footer with contact form
│   └── ui/             # shadcn/ui components
├── hooks/
│   └── use-mobile.tsx  # Mobile detection hook
├── lib/
│   └── utils.ts        # Utility functions (cn helper)
└── public/             # Static assets (images, PDFs)
```

## 🏗️ Build for Production

```bash
npm run build
```

This creates an optimized production build with:
- Static HTML pages (SSG)
- Optimized images
- Minified CSS and JavaScript
- Code splitting

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

Or use the Vercel CLI:
```bash
npm i -g vercel
vercel
```

### Deploy to Netlify

1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `.next`

### Deploy to Other Platforms

This portfolio is optimized for static hosting. You can deploy to:
- GitHub Pages
- Cloudflare Pages
- AWS S3 + CloudFront
- Any static hosting service

## 🎨 Customization

### Update Personal Information

1. **Hero Section**: Edit `components/Hero.tsx`
2. **About Section**: Edit `components/About.tsx`
3. **Projects**: Edit the `projectsData` array in `components/Projects.tsx`
4. **Contact Info**: Edit `components/Footer.tsx`
5. **Metadata**: Update `app/layout.tsx` for SEO

### Change Colors & Theme

Edit CSS variables in `app/globals.css`:
```css
:root {
  --primary: 200 90% 50%;         /* Primary color */
  --accent: 180 70% 50%;          /* Accent color */
  /* ... more variables */
}
```

### Add New Projects

Add to the `projectsData` array in `components/Projects.tsx`:
```typescript
{
  title: "Your Project",
  description: "Project description",
  imageUrl: "/project-image.jpg",
  tags: ["React", "TypeScript"],
  liveUrl: "https://your-project.com",
  repoUrl: "https://github.com/your-repo",
}
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🔧 Performance Optimizations

- **Static Site Generation**: All pages pre-rendered at build time
- **Image Optimization**: Automatic WebP conversion and lazy loading
- **Font Optimization**: Self-hosted fonts with `next/font`
- **Code Splitting**: Automatic code splitting for optimal bundle sizes
- **CSS Optimization**: Tailwind CSS purging unused styles

## 📄 License

This project is private and personal.

## 👤 Author

**Mohammad Jafar Saberi**
- 🌐 Portfolio: [https://jafar-saberi-portfolio.netlify.app/](https://jafar-saberi-portfolio.netlify.app/)
- Email: mohammadjafarsaberi11@gmail.com
- GitHub: [@mohammadjafarsaberi](https://github.com/mohammadjafarsaberi)
- LinkedIn: [Mohammad Jafar Saberi](https://www.linkedin.com/in/mohammad-jafar-saberi-518678248/)
- Twitter: [@M_Jafar_Saberi](https://x.com/M_Jafar_Saberi)

---

Built with ❤️ using Next.js and TypeScript
