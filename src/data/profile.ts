// ─────────────────────────────────────────────────────────────
// Single source of truth for all portfolio content.
// Edit this file to update the site — no need to touch components.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'ABDUL RAOOF',
  initials: 'AR',
  title: 'Full Stack MERN Developer',
  titles: [
    'Full Stack MERN Developer',
    'React.js Developer',
    'Frontend Engineer',
    'Future Machine Learning Engineer',
  ],
  location: 'Pattoki, Punjab, Pakistan',
  email: 'raoofg46@gmail.com',
  phone: '+92 307 4958499',
  shortBio:
    'I build fast, accessible, production-ready web apps with the MERN stack — with a growing focus on ML and AI engineering.',
  longBio:
    "I'm a Full Stack MERN Developer who enjoys turning real problems into clean, usable software. My focus is React.js, TypeScript, and Tailwind CSS on the frontend, paired with Node.js, Express, and MongoDB on the backend. I care about interfaces that feel obvious to use and code that's easy for the next person — often future me — to maintain. Right now I'm deepening my TypeScript and expanding into Python, machine learning, and AI engineering, aiming to build systems that are both well-engineered and genuinely intelligent.",

  resumeUrl: '/resume.pdf',
  photoUrl: '/profile.png',
  hasRealPhoto: true,

  social: {
    github: 'https://github.com/raoofali',
    linkedin: 'https://www.linkedin.com/in/abdul-raoof-b666861b1',

    // TODO: add if/when available
    twitter: '',
    leetcode: '',
    devto: '',
  },

  education: [
    {
      degree: 'Bachelor of Science in Computer Science (BSCS)',
      uni: 'Government College University Faisalabad (GCUF)',
      period: '2021 – 2025',
      note: 'Graduated October 2025',
    },
  ],
};

export const skills = {
  Frontend: [
    'HTML5',
    'CSS3',
    'JavaScript (ES6+)',
    'React.js',
    'TypeScript',
    'Tailwind CSS',
    'Vite',
    'Next.js',
    'Material UI',
    'Responsive Design',
  ],
  Backend: ['Node.js', 'Express.js'],
  Database: ['MongoDB', 'MongoDB Atlas'],
  'Tools & Platforms': [
    'Git',
    'GitHub',
    'VS Code',
    'Postman',
    'Cloudinary',
    'Vercel',
    'Render',
    'Railway',
  ],
  'Currently Learning': [
    'Advanced React',
    'Machine Learning',
    'Python',
    'NumPy',
    'Pandas',
    'AI Engineering',
  ],
};

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  stack: string[];
  features: string[];
  github: string;
  live: string;
  featured: boolean;
  hasScreenshots: boolean;
  screenshot?: string;
  screenshots?: string[];
}

// NOTE: there used to be two separate objects both using
// slug: 'gym-management-system' (one pointing at the newer
// "-complete" repo/screenshots, one at an older repo). Duplicate
// slugs break React's list keys and caused this project to render
// twice in "Featured work" on the homepage. Kept only the newer,
// more complete version below.
export const projects: Project[] = [
  {
    slug: 'gym-management-system',
    name: 'Gym Management System',
    tagline: 'Complete gym operations & membership management platform',
    description:
      'A full-stack MERN gym management platform built to centralize member registration, membership plans, fee collection, attendance, renewals, and daily gym operations in one responsive dashboard.',
    problem:
      'Gym operations were often handled through paper registers and spreadsheets, making it difficult to track members, membership plans, fee payments, renewals, and overall gym activity efficiently.',
    solution:
      'Built a centralized role-based management system that allows gym owners to manage members, membership packages, fees, registrations, and operational data through a responsive dashboard, with secure authentication and cloud-based member profile images.',
    stack: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'Tailwind CSS',
      'Material UI Icons',
      'Cloudinary',
      'JWT',
    ],
    features: [
      'Member registration & complete member management',
      'Secure authentication & role-based owner access',
      'Membership plans & package management',
      'Monthly fee collection & payment tracking',
      'Membership status & renewal tracking',
      'Member profile image uploads with Cloudinary',
      'Dashboard with gym performance insights',
      'Search, filtering & organized member records',
      'Responsive admin interface for desktop and mobile',
      'RESTful backend API with MongoDB persistence',
    ],
    github: 'https://github.com/raoofali/gym-management-system-complete',
    live: 'https://gym-management-system-complete.vercel.app/login',
    featured: true,
    hasScreenshots: true,
    screenshots: [
      '/projects/gym-dashboard1.png',
      '/projects/gym-members1.png',
      '/projects/gym-fees1.png',
      '/projects/gym-login1.png',
    ],
  },

  {
    slug: 'bazaar',
    name: 'Bazaar',
    tagline: 'Production-style MERN e-commerce platform',
    description:
      'A full-stack e-commerce platform built with the MERN stack, featuring a premium storefront, complete customer account system, and a powerful admin dashboard for managing products, orders, users, coupons, and inventory.',
    problem:
      'E-commerce businesses need a reliable platform that can handle the complete customer journey while giving administrators centralized control over products, orders, customers, inventory, and promotions.',
    solution:
      'Built Bazaar as a full-stack MERN platform with customer and admin experiences, JWT authentication, backend-authoritative pricing, product and inventory management, cart and wishlist functionality, checkout, order tracking, reviews, coupons, and analytics.',
    stack: [
      'React 19',
      'Vite',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'JWT',
      'Axios',
    ],
    features: [
      'Product browsing, search, filtering & pagination',
      'JWT authentication with customer accounts',
      'Cart, wishlist & product comparison',
      'Multi-step checkout with COD/Card/Mock Payment',
      'Order tracking & cancellation',
      'Product reviews & related products',
      'Admin dashboard with analytics',
      'Product, order & user management',
      'Coupon & inventory management',
      'Backend-authoritative pricing and stock validation',
    ],
    github: 'https://github.com/raoofali/bazaar',
    live: 'https://bazaar-orpin.vercel.app/',
    featured: true,
    // FIXED: this used to list bazaar-home.png / bazaar-product.png /
    // bazaar-admin.png, none of which exist in public/projects — only
    // bazaar-shop.png does, so 3 of 4 thumbnails were broken images.
    // Add the real screenshots to public/projects and extend this array
    // whenever you have them; for now it only references what's real.
    hasScreenshots: true,
    screenshots: ['/projects/bazaar-shop.png'],
  },

  {
    slug: 'developer-portfolio',
    name: 'Developer Portfolio',
    tagline: 'Modern personal portfolio for showcasing projects, skills & experience',
    description:
      'A modern, responsive developer portfolio built to showcase my technical skills, full-stack projects, professional experience, education, and journey as a Full Stack MERN Developer.',
    problem:
      'Developers need more than a simple resume to demonstrate their technical capabilities. A portfolio should present real projects, technical decisions, experience, and skills through a clear and professional digital experience.',
    solution:
      'Built a responsive personal portfolio with dedicated sections for projects, skills, experience, education, and professional information. The site uses reusable React components, structured project data, interactive screenshot galleries, animations, and SEO-friendly metadata.',
    stack: ['React.js', 'TypeScript', 'Vite', 'Tailwind CSS', 'Lucide React', 'React Helmet'],
    features: [
      'Responsive personal portfolio design',
      'Project case studies with problem & solution sections',
      'Interactive project screenshot galleries',
      'Technical skills organized by category',
      'Professional experience & education sections',
      'Reusable React component architecture',
      'Animated reveal interactions',
      'SEO-friendly page titles & metadata',
      'Mobile-first responsive interface',
      'Professional social & contact integration',
    ],
    github: 'https://github.com/raoofali/abdul-raoof-portfolio',
    live: 'https://abdul-raoof-portfolio-two.vercel.app/',
    featured: true,
    hasScreenshots: true,
    screenshots: [
      '/projects/portfolio-home.png',
      '/projects/portfolio-projects.png',
      '/projects/portfolio-skills.png',
      '/projects/portfolio-mobile.png',
    ],
  },

  {
    slug: 'medical-website',
    name: 'Medical Website',
    tagline: 'Frontend built during my internship',
    description:
      'A responsive React.js frontend for a medical/healthcare business, built while interning at Endless Invo Software House.',
    problem:
      'The client needed a clean, professional web presence that worked well across devices for prospective patients.',
    solution:
      'Implemented the frontend in React.js with a focus on responsive layout and component reusability, working within an existing design handed off by the team.',
    stack: ['React.js', 'CSS3', 'Responsive Design'],
    features: ['Responsive layout', 'Reusable component structure'],
    // TODO: add real links once you have permission to share client work
    github: '',
    live: '',
    featured: false,
    hasScreenshots: false,
  },
];

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
  tech: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: 'Frontend Developer Intern',
    company: 'Endless Invo Software House',
    location: 'Johar Town, Lahore',
    period: '2025', // TODO: add exact start/end dates
    responsibilities: [
      'Built responsive UI components in React.js for production client work',
      'Developed the frontend for a medical/healthcare website',
      'Collaborated within a team workflow using Git for version control',
    ],
    tech: ['React.js', 'CSS3', 'Git'],
  },
];

// Placeholder sections — fill these in as you collect them.
// Kept structured so the site can render them the moment data exists.
export const certifications: { name: string; issuer: string; date: string; url?: string }[] = [];
export const awards: { title: string; issuer: string; date: string }[] = [];
export const testimonials: { name: string; role: string; quote: string }[] = [];
export const blogPosts: { slug: string; title: string; excerpt: string; date: string }[] = [];
