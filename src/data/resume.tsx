import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, GlobeIcon, MailIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Dhananjay Pareek",
  initials: "DP",
  url: "https://rankernet.com",
  location: "Jaipur, India",
  locationLink: "https://www.google.com/maps/place/jaipur",
  description:
    "Certified SOC Analyst · Full-Stack Developer (WP/Shopify/Custom Code) · SEO Expert · Helping 15+ Startups with Secure & Optimized Web Applications",
  summary:
    "**I don't just build websites - I build them secure.**\n\nAs a certified cybersecurity professional and full-stack developer, I bring something most developers can't: a security-first mindset. SQL injection, XSS, authentication flaws - I know how attackers think, and I build defenses in from day one.\n\nI've worked with **15+ startups in India and the UK**, delivering WordPress, Shopify, React, and custom-coded solutions with SEO baked in. Clean code. Fast sites. Rankings that stick.",
  avatarUrl: "/pfp.jpg",
  skills: [
    { name: "Web Development", icon: ReactLight },
    { name: "React", icon: ReactLight },
    { name: "WordPress Development", icon: GlobeIcon },
    { name: "Shopify Development", icon: GlobeIcon },
    { name: "Search Engine Optimization (SEO)", icon: GlobeIcon },
    { name: "Go", icon: GlobeIcon },
    { name: "PHP", icon: GlobeIcon },
    { name: "Cybersecurity", icon: Icons.globe },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "dhananjaypareek257@gmail.com",
    tel: "+918209750537",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/dhananjay-pareek",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/dhananjay-pareek/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:dhananjaypareek257@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "YoRoom!",
      href: "",
      badges: [],
      location: "United Kingdom",
      title: "Creative Designer",
      logoUrl: "/yoroomuk_logo.jpg",
      start: "October 2025",
      end: "Present",
      description: "Managing the visual identity of YOROOM's Instagram and LinkedIn platforms remotely. Responsible for designing social content that reflects the brand's values and drives community engagement.",
    },
    {
      company: "Delhi-based Digital Agency",
      badges: ["White-Label"],
      href: "",
      location: "Remote",
      title: "Web Developer & SEO Specialist",
      logoUrl: "",
      start: "January 2026",
      end: "Present",
      description: "Delivering white-label web development and SEO projects for a Delhi-based digital agency. Work includes WordPress and Shopify builds, on-page and off-page SEO, backlink building, site migrations, and performance optimization for the agency's end clients.",
    },
    {
      company: "Avior Jewels",
      badges: [],
      href: "",
      location: "Remote",
      title: "Shopify Developer & Digital Growth Consultant",
      logoUrl: "/avior_jewels_logo.jpg",
      start: "March 2025",
      end: "Present",
      description: "Managing end-to-end Shopify development, SEO, and ongoing AMC for Avior Jewels, a D2C jewellery brand. Work includes store development, theme customization, product management, technical SEO, and off-page optimization through quality backlink building and DA improvement. Over the last 90 days the store recorded 16.3K sessions, and 99 orders with total sales up 24%, orders up 18%, and conversion rate improved by 213% through continuous optimization, SEO audits, and strategic link-building.",
    },
    {
      company: "Foxclues",
      href: "",
      badges: [],
      location: "Jaipur",
      title: "SEO Executive",
      logoUrl: "/foxclues_logo.jpg",
      start: "July 2025",
      end: "Present",
      description: "Executed on-page and technical SEO strategies for FoxStory India, improving website crawlability and loading speed. Contributed to Domain Authority growth through link-building, SEO audits, and performance reporting.",
    },
    {
      company: "ekiva",
      href: "",
      badges: [],
      location: "Englefield Green, UK",
      title: "Digital Designer",
      logoUrl: "/ekiva_ltd_logo.jpg",
      start: "August 2024",
      end: "February 2025",
      description: "Designed digital assets including graphics, videos, and presentations for a UK-based network tech startup. Translated complex solutions like NaaS and SaaS into clear, engaging visual content for enterprise clients.",
    },
    {
      company: "Best Capital Services Limited",
      href: "",
      badges: [],
      location: "Jaipur",
      title: "SEO Executive",
      logoUrl: "/best_capital_services_limited01_logo.jpg",
      start: "June 2024",
      end: "December 2025",
      description: "Started as SEO Intern and promoted to SEO Executive. Managed search engine optimization strategies for the company.",
    },
  ],

  projects: [
    {
      title: "Google Maps Data Scraper",
      href: "https://github.com/dhananjay-pareek/GMAP-Scrapper",
      dates: "Jan 2026 - Present",
      active: true,
      description: "Built a Google Maps scraper in Go that pulls business data at scale. Fast, concurrent, and built for lead gen and local SEO research.",
      technologies: ["Go", "Web Scraping", "Lead Generation"],
      links: [
        {
          type: "Website",
          href: "https://gms-epgq.onrender.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/gmap-scrapper.png",
      video: "",
    },
    {
      title: "Rankernet.com",
      href: "https://rankernet.com",
      dates: "Sep 2025 - Present",
      active: true,
      description: "My agency website, built from scratch in React. Handles my freelance work and client projects. Currently turning it into a SaaS product.",
      technologies: ["React", "JavaScript", "UI/UX Design"],
      links: [
        {
          type: "Website",
          href: "https://rankernet.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/projects/rankernet-homepage.mp4",
    },
    {
      title: "Oz Stone Warehouse",
      href: "https://ozstonewarehouse.com.au",
      dates: "Feb 2026 - Mar 2026",
      active: false,
      description: "Migrated an Australian stone importer's site from Laravel to WordPress. Custom theme, product catalog, clean URLs - kept all their SEO juice intact.",
      technologies: ["WordPress", "Laravel", "SEO"],
      links: [
        {
          type: "Website",
          href: "https://ozstonewarehouse.com.au",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/projects/oz-stone.mp4",
    },
    {
      title: "OutStoryIndia SEO",
      href: "",
      dates: "Jun 2025 - Aug 2025",
      active: false,
      description: "Rescued a news site's SEO after they wiped 3,000+ posts. Rebuilt the architecture, fixed indexing issues, got them ranking again. Used Rank Math, SEMrush, and lots of backlink outreach.",
      technologies: ["SEO", "Google Search Console", "Cloudflare", "Content Strategy"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "IndiWiki.com",
      href: "https://indiwiki.com",
      dates: "Jul 2025 - Aug 2025",
      active: false,
      description: "A Wikipedia-style platform I built on WordPress from scratch. Custom theme, PHP backend, auto-updating content sections. Set up the server myself too.",
      technologies: ["PHP", "WordPress", "Server Setup"],
      links: [
        {
          type: "Website",
          href: "https://indiwiki.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/indiwiki.png",
      video: "",
    },
    {
      title: "Vajra Trading Terminal",
      href: "",
      dates: "2026 - Present",
      active: true,
      description: "ML-powered trading dashboard I'm building. Runs 140+ indicators and strategies, spits out trade signals. Backtested at 75% accuracy. Still in development.",
      technologies: ["Python", "Machine Learning", "Trading"],
      links: [],
      image: "",
      video: "/projects/vajra.mp4",
    },
  ],
  hackathons: [
    {
      title: "State Government Recognition for Cybersecurity Excellence",
      dates: "March 2026",
      location: "Government of Rajasthan, India",
      description:
        "Personally recognized and awarded by the Hon’ble Chief Minister of Rajasthan, Shri Bhajan Lal Sharma Ji (equivalent to a U.S. State Governor), during Rajasthan Yuva Shakti Diwas 2026. Selected as the sole representative for Cybersecurity out of the entire state, receiving this distinction on stage in the presence of government ministers and 1,000+ officials.",
      image: "",
      links: [] as readonly any[],
    },
    {
      title: "1st place for Best Performance at the IT Exhibition and Hackathon 2024",
      dates: "January 2024",
      location: "Maharishi Arvind Institute of Science & Management",
      description:
        "Won 1st place for Best Performance at the IT Exhibition and Hackathon 2024! 🏆 It was a great experience to present my ideas and learn from other amazing projects.",
      image: "",
      links: [] as readonly any[],
    },
  ],
  certifications: [
    {
      title: "Certified SOC Analyst (CSA v2)",
      issuer: "EC-Council",
      dates: "February 2026",
      credentialId: "ECC5403196278",
      verifyUrl: "https://aspen.eccouncil.org/VerifyBadge?type=certification&a=eV8q+VMHRSRAZr9drMOKUAXLRaUQuvaEBgkecGcBNCw=",
      description: "EC-Council certification in threat detection and security monitoring. Means I know how to spot vulnerabilities like SQL injection, XSS, and auth flaws before they become problems.",
      skills: ["Secure Web Development", "Vulnerability Prevention", "Threat Detection", "Security Best Practices"],
    },
  ],
  differentiators: [
    {
      title: "Security-First Development",
      description: "I'm trained to think like an attacker. SQL injection, XSS, CSRF - I build defenses in from the start, not as an afterthought.",
      icon: "shield",
    },
    {
      title: "Full-Stack SEO Knowledge", 
      description: "Sites I build are made to rank. Technical SEO, Core Web Vitals, backlinks - it's all part of the build, not a separate service.",
      icon: "search",
    },
    {
      title: "End-to-End Ownership",
      description: "Design, code, deploy, optimize. One person, no handoffs, no 'that's not my job'. You get accountability.",
      icon: "code",
    },
  ],
} as const;
