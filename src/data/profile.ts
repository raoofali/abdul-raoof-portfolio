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

  // TODO: drop your real files into /public and update these paths
  resumeUrl: '/resume.pdf', // placeholder — see public/resume-PLACEHOLDER.md
  photoUrl: '/profile.png', // placeholder — add a square photo here
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

export const projects: Project[] = [
  {
    slug: 'gym-management-system',
    name: 'Gym Management System',
    tagline: 'Full-stack MERN app for running a gym end to end',
    description:
      'A complete gym operations platform covering member registration, attendance, subscription plans, and payments — built to replace manual, paper-based tracking.',
    problem:
      'Gym owners were managing members, fees, and renewals manually across registers and spreadsheets, leading to missed renewals and no visibility into overall performance.',
    solution:
      'Built a role-based MERN application with an owner panel, automated fee/subscription tracking, and image-backed member profiles via Cloudinary — turning a manual process into a single dashboard.',
    stack: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Tailwind CSS',
      'Material UI Icons',
      'Cloudinary',
    ],
    features: [
      'Member management & registration system',
      'Authentication & role-based owner panel',
      'Fee & subscription/package management',
      'Image upload for member profiles (Cloudinary)',
      'Performance dashboard for the owner',
      'Fully responsive UI',
    ],
    github: 'https://github.com/raoofali/gym-management-system',
    live: 'https://gym-management-system-ten-nu.vercel.app',
    featured: true,
    hasScreenshots: true,
    screenshots: [
      '/projects/gym-dashboard.png',
      '/projects/gym-fees.png',
      '/projects/gym-login.png',
      '/projects/gym-members.png',
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
