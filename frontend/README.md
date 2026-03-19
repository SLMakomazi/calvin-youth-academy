# Calvin Youth Academy Website

A modern, high-end nonprofit website for Calvin Youth Academy, a South African youth development NGO focused on bridging the gap between education and employment for underserved youth.

## 🚀 Features

- **Modern Design**: Clean, hopeful, and trustworthy aesthetic with abstract gradient shapes
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Component-Based**: Reusable React components for maintainability
- **SEO Optimized**: Semantic HTML5 structure for better search engine visibility

## 🛠 Tech Stack

- **React 18** - Modern React with functional components
- **Vite** - Fast development server and build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icon library

## 🎨 Design System

### Color Palette
- **Primary (Deep Trust Blue)**: #0F172A
- **Secondary (Hope Blue)**: #2563EB
- **Accent (Energy Orange)**: #F97316
- **Highlight (Growth Green)**: #22C55E
- **Soft Background**: #F8FAFC
- **Text**: #0F172A

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/          # Reusable components
│   │   ├── AbstractShapes.jsx
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Footer.jsx
│   │   └── Navbar.jsx
│   ├── pages/               # Page components
│   │   ├── About.jsx
│   │   ├── Apply.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   ├── Programme.jsx
│   │   └── Skills.jsx
│   ├── assets/              # Static assets
│   ├── App.jsx              # Main app component
│   ├── index.css            # Global styles
│   └── main.jsx             # App entry point
├── public/                  # Public assets
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 📄 Pages

1. **Home** - Hero section, programme overview, impact stats, skills preview
2. **About** - Organization story, mission, vision, values, approach
3. **Programme** - Detailed funding page with 4-phase system breakdown
4. **Skills** - Course catalog with Level 5 & 6 qualifications
5. **Apply** - Multi-step application form with requirements
6. **Contact** - Contact form and partnership opportunities

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd calvin-youth-academy/frontend
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Key Features

### Navigation
- Transparent navbar that turns white on scroll
- Mobile-responsive hamburger menu
- Active page highlighting

### Animations
- Fade-in animations on scroll
- Floating abstract shapes
- Hover effects on interactive elements
- Smooth page transitions

### Components
- **Button** - Multiple variants (primary, secondary, outline, ghost)
- **Card** - Reusable card component with animations
- **Navbar** - Responsive navigation with scroll effects
- **Footer** - Comprehensive footer with links and contact info
- **AbstractShapes** - Animated gradient background elements

## 🎨 Design Principles

- **Hopeful & Modern**: Clean design with optimistic color palette
- **Trustworthy**: Professional layout with clear information hierarchy
- **Accessible**: Semantic HTML and keyboard navigation support
- **Performance**: Optimized animations and lazy loading
- **Mobile-First**: Responsive design prioritizing mobile experience

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🌟 Acknowledgments

- Built for Calvin Youth Academy
- Designed to empower South African youth
- Supporting education-to-employment pathways
