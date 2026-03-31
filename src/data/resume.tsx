import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
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
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "EC-Council Certified SOC Analyst and full-stack developer with hands-on experience in web development, graphic design, social media, and SEO.",
  summary:
    "I build websites and web applications on WordPress, Shopify, PHP/Laravel, React, .NET, and more with security and performance built in from the start. I've worked with 15+ startups in India and the UK, helping them grow their digital presence through clean code, creative content, and technical optimization. Currently expanding deeper into cybersecurity with a focus on threat monitoring and blue team operations.",
  avatarUrl: "https://media.licdn.com/dms/image/v2/D5603AQE5s7OlvgNbwg/profile-displayphoto-shrink_200_200/B56ZSpPvluHsAY-/0/1738006266261?e=1775692800&v=beta&t=aMLkATEPTpj-DnJLrZSc305gIWwMygwEe61bKXSZ-Gw",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Laravel", icon: undefined },
    { name: "Shopify", icon: undefined },
    { name: "WordPress", icon: undefined },
    { name: ".NET", icon: undefined },
    { name: "JavaScript/TypeScript", icon: Typescript },
    { name: "Python", icon: Python },
    { name: "Lead Generation", icon: undefined },
    { name: "SEO", icon: undefined },
    { name: "Graphic/Social Media Design", icon: undefined },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
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
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
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
      title: "Search Engine Optimisation Intern",
      logoUrl: "https://media.licdn.com/dms/image/v2/C4D0BAQEnXcGPSTUIHg/company-logo_100_100/company-logo_100_100/0/1630523475369/foxclues_logo?e=1775692800&v=beta&t=FAoQfowfdwmfYGEJI6H8gIUSwmK6gYmUY_KTgA6u3NM",
      start: "July 2025",
      end: "August 2025",
      description: "Executed on-page and technical SEO strategies for Outstory India, improving website crawlability and loading speed. Contributed to Domain Authority growth through link-building, SEO audits, and performance reporting.",
    },
    {
      company: "AYN NEWS",
      href: "",
      badges: [],
      location: "Jaipur",
      title: "Social Media Marketing Intern",
      logoUrl: "",
      start: "April 2025",
      end: "June 2025",
      description: "Created and scheduled content across Instagram, Facebook, and LinkedIn for a registered digital media platform.",
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
      title: "Creative Designer",
      logoUrl: "https://media.licdn.com/dms/image/v2/D560BAQFAzDDBqsSyjQ/company-logo_100_100/company-logo_100_100/0/1728894621751/best_capital_services_limited01_logo?e=1775692800&v=beta&t=y9RDFRU7RIVZJbcQ8gtrOFjihzmZSjYm8d62dcdRWCM",
      start: "July 2024",
      end: "August 2024",
      description: "Produced graphics and video content representing Best Capital's financial services and brand identity.",
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
      description: "Built a Google Maps scraper using Go, integrated with GenAI capabilities to extract, process, and structure business data at scale. Designed for speed and efficiency leveraging Go's concurrency model. Use cases include lead generation, local SEO research, and competitor analysis.",
      technologies: ["Go", "Generative AI", "Lead Generation"],
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
      description: "Designed and developed Rankernet.com from scratch using React a fully custom-built digital agency website currently serving as the flagship for my freelance and client work. The platform is being actively developed into a SaaS product. Handled complete frontend architecture, UI/UX design, and deployment independently.",
      technologies: ["React", "UI/UX Design"],
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
      description: "Migrated the full website of Oz Stone Warehouse (Australia) from Laravel to WordPress. Rebuilt the site with a custom theme, product catalogue, and contact flows - preserving URL structure and SEO continuity throughout the migration. Delivered a faster, client-manageable WordPress solution for an Australian sandstone importer serving customers across the country.",
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
      description: "Led end-to-end SEO recovery and growth strategy for OutStory India, a digital news platform covering politics, business, and current affairs. Managed a full content rebuild after a 3,000+ post reset restructuring site architecture, submitting sitemaps, and resolving indexing issues via Google Search Console. Implemented on-page optimization using Rank Math targeting 90+ scores, conducted keyword research via SEMrush, and developed pillar content supported by niche articles. Built authority through internal linking and guest post outreach. Configured Cloudflare, caching, and image optimization for performance. Work was aligned toward Google News approval and consistent branded query rankings.",
      technologies: ["Search Engine Optimization (SEO)", "Foxclues", "Google Search Console", "Cloudflare"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "IndiWiki.com",
      href: "https://indiwiki.com",
      dates: "Jul 2025 - Aug 2025",
      active: false,
      description: "Designed and developed IndiWiki.com from scratch a fully functional Wikipedia-style platform built on a custom WordPress theme. Handled complete project ownership including server setup on cPanel, custom PHP functionality, plugin configuration for SEO, security and automation, and responsive UI design. Key features include an auto-updating recent posts section, dynamic sidebar image embeds, and an optimized wiki-style layout. Delivered a live, fast-loading, SEO-friendly platform built end-to-end independently.",
      technologies: ["PHP", "WordPress", "cPanel", "Foxclues"],
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
      description: "Built TransformsYou.in, a yoga services platform for a wellness brand in Gurugram, India. Developed the site using WordPress and Elementor, implementing a class registration flow, instructor profiles, and an SEO-optimized blog section. Focused on delivering a clean, user-friendly experience for both new and experienced yoga practitioners, with strong on-page SEO foundations for local search visibility.",
      technologies: ["Elementor", "Search Engine Optimization (SEO)", "WordPress"],
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
      title: "Representing Cybersecurity at the State Level",
      dates: "March 2026",
      location: "Government of Rajasthan",
      description:
        "Personally recognized and awarded by the Hon’ble Chief Minister of Rajasthan, Shri Bhajan Lal Sharma Ji, during Rajasthan Yuva Shakti Diwas 2026. Selected as the sole representative for the Cybersecurity domain to receive this distinction on stage in the presence of state cabinet ministers and 1,000+ NCC and DoIT&C personnel.",
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
} as const;
