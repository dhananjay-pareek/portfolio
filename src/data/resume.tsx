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
  avatarUrl: "https://media.licdn.com/dms/image/v2/D5603AQE5s7OlvgNbwg/profile-displayphoto-shrink_200_200/B56ZSpPvluHsAY-/0/1738006266261?e=1775692800&v=beta&t=aMLkATEPTpj-DnJLrZSc305gIWwMygwEe61bKXSZ-Gw",
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
      logoUrl: "https://media.licdn.com/dms/image/v2/C4D0BAQHUuo8q6FUeqw/company-logo_100_100/company-logo_100_100/0/1630574071968/yoroomuk_logo?e=1775692800&v=beta&t=3PWTmp-dX0kiZSWRrDwhywkUwfGmx3u3eT6AuAW0AoE",
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
      logoUrl: "https://media.licdn.com/dms/image/v2/D560BAQFIEH4Gidt_bw/company-logo_100_100/company-logo_100_100/0/1727506088441/avior_jewels_logo?e=1775692800&v=beta&t=W4gAurghrDVyuw8DLGXYvwSZD31ZO156rxQIoNKnjg8",
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
      logoUrl: "https://media.licdn.com/dms/image/v2/C4D0BAQEnXcGPSTUIHg/company-logo_100_100/company-logo_100_100/0/1630523475369/foxclues_logo?e=1775692800&v=beta&t=FAoQfowfdwmfYGEJI6H8gIUSwmK6gYmUY_KTgA6u3NM",
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
      logoUrl: "https://media.licdn.com/dms/image/v2/D4E0BAQFDDJr6o1iL1A/company-logo_100_100/company-logo_100_100/0/1695754396036/ekiva_ltd_logo?e=1775692800&v=beta&t=Wh2qZReFMms1YXAtooYMQ2e24al9ltHOUb7HKDRCfFw",
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
      logoUrl: "https://media.licdn.com/dms/image/v2/D560BAQFAzDDBqsSyjQ/company-logo_100_100/company-logo_100_100/0/1728894621751/best_capital_services_limited01_logo?e=1775692800&v=beta&t=y9RDFRU7RIVZJbcQ8gtrOFjihzmZSjYm8d62dcdRWCM",
      start: "June 2024",
      end: "December 2025",
      description: "Started as SEO Intern and promoted to SEO Executive. Managed search engine optimization strategies for the company.",
    },
  ],
  education: [
    {
      school: "University of Rajasthan",
      href: "",
      degree: "Bachelor of Computer Applications (BCA)",
      logoUrl: "https://media.licdn.com/dms/image/v2/C510BAQFiJfi4y77ylA/company-logo_100_100/company-logo_100_100/0/1631342155240?e=1775692800&v=beta&t=LoOs8c7zZnaV48Jjahc9ku7TKh6FVlCI2b86N2E66FU",
      start: "July 2023",
      end: "Present",
    },
    {
      school: "Maheshwari Public School",
      href: "",
      degree: "Intermediate, Computer and Information Sciences and Support Services",
      logoUrl: "https://media.licdn.com/dms/image/v2/C4D0BAQG3j1bLUPhc5Q/company-logo_100_100/company-logo_100_100/0/1679820797802/maheshwari_public_school_logo?e=1775692800&v=beta&t=WISk51P4Oub7dYRvZ6OzAB-M0s1gpMqqrT4m4KCGtnU",
      start: "2018",
      end: "2022",
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
      title: "TransformsYou.in",
      href: "https://transformsyou.in",
      dates: "Aug 2023 - Sep 2023",
      active: false,
      description: "Yoga services website for a Gurugram wellness brand. WordPress + Elementor, class registration, instructor profiles, and SEO setup for local search.",
      technologies: ["WordPress", "Elementor", "SEO"],
      links: [
        {
          type: "Website",
          href: "https://transformsyou.in",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
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
