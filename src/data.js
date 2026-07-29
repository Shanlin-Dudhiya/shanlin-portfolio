export const profile = {
  name: "Shanlin Dudhiya",
  title: "Full Stack Developer",
  location: "Ahmedabad, Gujarat, India",
  phone: "+91 9824779516",
  whatsapp: "https://wa.me/919824779516",
  email: "shanlindudhiya06@gmail.com",
  linkedin: "https://www.linkedin.com/in/shanlin-dudhiya/",
  github: "https://github.com/Shanlin-Dudhiya",
  summary:
    "Dedicated Full Stack Developer with hands-on experience building scalable web applications using React.js, Express.js, Node.js, and MongoDB. Proven track record in developing RESTful APIs, optimizing performance, and managing production deployments on Linux servers. Passionate about modern JavaScript frameworks and industry best practices.",
};

export const skills = [
  {
    category: "Languages",
    items: ["JavaScript (ES6+)", "SQL", "HTML", "CSS"],
  },
  {
    category: "Frameworks / Libraries",
    items: ["React.js", "Node.js", "Express.js", "Next.js"],
  },
  {
    category: "Databases",
    items: ["MySQL", "MS SQL Server", "MongoDB"],
  },
  {
    category: "Tools & Platforms",
    items: ["GitHub", "VS Code", "cPanel", "FileZilla", "REST APIs"],
  },
  {
    category: "Cloud / DevOps",
    items: [
      "Linux Server Deployment",
      "cPanel Hosting",
      "Domain & SSL Management",
      "SSH (PuTTY)",
      "Vercel",
      "GitHub CI/CD",
    ],
  },
];

export const experience = [
  {
    company: "Green Leaves Academy Pvt. Ltd.",
    role: "Full Stack Developer",
    location: "Ahmedabad, India",
    period: "July 2025 – June 2026",
    points: [
      "Engineered and deployed the official company website (greelacademy.online) from the ground up using the MERN stack.",
      "Developed responsive frontend UI and robust backend business logic, ensuring cross-browser compatibility.",
      "Managed production deployment and server maintenance using cPanel, FileZilla, and SSH (PuTTY).",
      "Integrated secure RESTful APIs and optimized SQL queries to improve data retrieval speeds by 20%.",
    ],
  },
  {
    company: "Revelation Technologies LLP",
    role: "MERN Stack Developer Trainee",
    location: "Ahmedabad, India",
    period: "Jan 2025 – June 2025",
    points: [
      "Contributed to the Smart Lab live project, taking ownership of specific module end-to-end lifecycles.",
      "Built a Tea Diary System for vendors to automate daily order tracking and monthly billing cycles.",
      "Utilized Next.js to redesign the Half Olive client project, significantly improving SEO and load times.",
      "Enhanced UI/UX for the Keshroot project by migrating legacy components to React.js functional components.",
    ],
  },
  {
    company: "InfiVidhiya Pvt. Ltd.",
    role: "Full Stack Developer Trainee",
    location: "Ahmedabad, India",
    period: "June 2024 – July 2024",
    points: [
      "Developed BookWorm, a responsive e-commerce platform for book discovery using vanilla JavaScript.",
      "Implemented advanced filtering logic for searching books by genre, author, and price range.",
    ],
  },
];

export const projects = [
  {
    name: "Chat with a Website",
    stack: "Next.js, PostgreSQL (pgvector), Gemini, Voyage AI",
    points: [
      "Built a full crawl-and-RAG pipeline: a same-domain, robots.txt-aware BFS crawler indexes a site's pages into chunked vector embeddings.",
      "Implemented retrieval-augmented generation with Google Gemini, using structured JSON output so every answer cites real retrieved sources instead of a hallucinated URL.",
      "Deployed the whole stack — Next.js app, Postgres/pgvector via Neon, and free-tier embedding/generation APIs — to Vercel at zero cost.",
    ],
    link: "https://github.com/Shanlin-Dudhiya/chat-with-website",
    demoLink: "https://chat-with-website-kappa.vercel.app/",
  },
  {
    name: "Bookworm",
    stack: "HTML, CSS, JavaScript",
    points: [
      "Built a responsive book discovery storefront with category filtering across 100+ titles and a detail page for each book.",
      "Added a full Buy Now checkout flow that collects delivery details and processes payment through a single online-payment option.",
      "Refactored the codebase to remove dead code, fix a broken category filter, and make the layout mobile-responsive.",
    ],
    link: "https://github.com/Shanlin-Dudhiya/Bookworm",
  },
  {
    name: "LR Photo Presets Platform",
    stack: "Node.js, Express, HTML, CSS",
    points: [
      "Built a digital storefront for Lightroom preset packs with an Express REST API for catalog browsing and category filtering.",
      "Implemented a clean, mobile-first drag-to-compare slider to showcase “Before/After” photo comparisons.",
      "Added a Buy Now checkout flow that collects delivery details and processes payment through a single online-payment option.",
    ],
    link: "https://github.com/Shanlin-Dudhiya/lr-photo-presets",
  },
  {
    name: "Bulk Mail Sender",
    stack: "Node.js, Nodemailer, Express.js",
    points: [
      "Built an automated bulk email dispatch system capable of sending personalized emails to large contact lists.",
      "Implemented retry logic and delivery tracking to maximize inbox placement rates and ensure reliable communication.",
    ],
    link: "https://github.com/Shanlin-Dudhiya/mailer",
  },
];

export const education = [
  {
    school: "Ahmedabad Institute of Technology",
    degree: "Bachelor of Engineering in Computer Engineering (CGPA: 7.56)",
    location: "Ahmedabad, India",
    period: "2022 – 2025",
  },
  {
    school: "R.C. Technical Institute",
    degree: "Diploma in Computer Engineering (CGPA: 8.50)",
    location: "Ahmedabad, India",
    period: "2019 – 2022",
  },
];
