# White Wing Group - Real Estate Website

A modern, responsive real estate website built with React, Vite, and Tailwind CSS. Features a mobile-first design with smooth animations and optimized performance.

## 🚀 Features

- **Mobile-First Design**: Responsive layout optimized for all devices
- **Modern Tech Stack**: React 19, Vite, Tailwind CSS 4.x
- **Smooth Animations**: Framer Motion for engaging user interactions
- **Form Handling**: React Hook Form with Zod validation
- **Performance Optimized**: Fast loading with modern build tools
- **Accessibility**: WCAG compliant components
- **SEO Ready**: Optimized meta tags and structure

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite 6.x
- **Styling**: Tailwind CSS 4.x with custom design system
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Build Tool**: Vite with hot reload
- **Package Manager**: npm

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd white-wing-real-estate
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── Header/         # Navigation header
│   ├── Hero/           # Hero section
│   ├── CoreValues/     # Core values section
│   ├── Clients/        # Client logos
│   ├── Projects/       # Project showcase
│   ├── Videos/         # Social media videos
│   ├── Contact/        # Contact form
│   ├── Footer/         # Footer section
│   └── UI/             # Reusable UI components
├── assets/             # Static assets
│   ├── images/         # Images and photos
│   └── icons/          # Icon files
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── data/               # Static data files
├── constants/          # App constants
└── styles/             # Global styles
```

## 🎨 Design System

### Colors

- **Primary**: Blue tones (#3493f2)
- **Secondary**: Gray tones
- **Navy**: Dark navy for footer (#05112f)
- **Accent**: Yellow/Gold accents
- **Neutral**: Grayscale palette

### Typography

- **Font**: Inter (Google Fonts)
- **Headings**: Bold weights with tight line-height
- **Body**: Regular weight with relaxed line-height

### Components

- **Buttons**: Primary, Secondary, Outline variants
- **Cards**: Soft shadows with hover effects
- **Forms**: Clean inputs with validation states

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📋 Development Guidelines

### Component Structure

```jsx
// Component template
import { useState } from "react";
import { motion } from "framer-motion";

const ComponentName = ({ prop1, prop2 }) => {
  const [state, setState] = useState(false);

  return (
    <motion.div
      className="component-classes"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Component content */}
    </motion.div>
  );
};

export default ComponentName;
```

### Styling Guidelines

- Use Tailwind utility classes
- Follow mobile-first approach
- Use custom CSS classes for complex components
- Maintain consistent spacing and typography

### Animation Guidelines

- Use Framer Motion for complex animations
- Respect `prefers-reduced-motion`
- Keep animations subtle and purposeful
- Use intersection observer for scroll animations

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Netlify/Vercel

1. Connect your repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

## 📊 Performance

- **Lighthouse Score**: 95+ (all categories)
- **Bundle Size**: < 500KB gzipped
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s

## 🔒 Security

- No sensitive data in frontend code
- Environment variables for configuration
- Secure form submission endpoints
- XSS protection with React

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary and confidential.

## 📞 Support

For support, email: mkt@whitewingsgroup.in
Phone: +91 98240-99444

---

Built with ❤️ by the White Wing Group development team.
