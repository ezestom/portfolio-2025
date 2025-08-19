import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Ezequiel Stom",
  initials: "ES",
  url: "https://ezestom.is-a.dev",
  location: "Buenos Aires, Argentina",
  locationLink: "https://www.google.com/maps/place/B1605+Munro,+Provincia+de+Buenos+Aires/@-34.5283073,-58.5155637,3a,75y,268.64h,48.87t/data=!3m7!1e1!3m5!1stNcMlpuFx6EH6PHjHaB1PA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D41.127638552315474%26panoid%3DtNcMlpuFx6EH6PHjHaB1PA%26yaw%3D268.6351741272847!7i16384!8i8192!4m6!3m5!1s0x95bcb0c6644d53c1:0x9c0cd6b0d56aa783!8m2!3d-34.5304233!4d-58.5243501!16zL20vMDliZmh5?entry=ttu&g_ep=EgoyMDI1MDgxMC4wIKXMDSoASAFQAw%3D%3D",
  description:
    "Frontend Developer with +3 years of experience in web development and modern technologies.",
  summary:
    "With over three years of experience building dynamic and engaging web applications using JavaScript, React, Astro, and Tailwind CSS. Passionate about creating seamless user experiences and staying ahead of the latest web technologies. Based in Buenos Aires, I combine my current role at Cacta Sustainability Solutions LLC with select freelance projects, allowing me to continuously sharpen my skills. I am looking for a full-time position on an innovative team to further my expertise in modern web development.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Astro",
    "Tailwind CSS",
    "JavaScript",
    "HTML",
    "CSS",
    "Git",
    "GitHub",
    "MySQL",
    "MCP",
    "Agents",
    "AI Development",
    "DaVinci Resolve"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/resume", icon: NotebookIcon, label: "Resume" },
  ],
  contact: {
    email: "ezequielstom@gmail.com",
    tel: "+5491168641122",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ezestom",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ezequielstom/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:ezequielstom@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Cacta",
      href: "https://cacta.eco/",
      badges: [],
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "/cacta.png",
      start: "Feb 2024",
      end: null,
      description:
        "Spearheaded the end-to-end creation of the website for Cacta Sustainability Solutions. Engineered a high-performance, optimized site by leveraging Astro, React.js, and Tailwind CSS. Solved unique technical challenges, including the implementation of an AI-powered video editing feature. Currently partnering with the team to evolve the platform, enhancing functionality to revolutionize sustainability on a global scale.",
    },
    {
      company: "Inducítrica",
      href: "https://inducitrica.com",
      badges: [],
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "/inducitrica.webp",
      start: "Jul 2025",
      end: "Aug 2025",
      description:
        "Partnered with the design and marketing teams to launch Inducítrica's new corporate website. Translated complex UI/UX designs into a fluid, modern, and high-performance user experience by building the frontend with React, Astro, and Tailwind CSS.",
    },
    {
      company: "Sambataro Arquitectos",
      badges: [],
      href: "https://www.sambataroarquitectos.com/",
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "/sambataro.png",
      start: "Jan 2025",
      end: "Mar 2025",
      description:
        "Architected and built the new digital presence for Sambataro Arquitectos from concept to deployment. Transformed the core concept of 'from theatrical architecture to the digital stage' into a minimalist, high-impact visual portfolio. Crafted the entire experience using Astro for structure, Tailwind CSS for styling, and React for dynamic components.",
    },
    {
      company: "Sushi App",
      badges: [],
      href: "https://www.sushiapp.com/",
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "/sushi.png",
      start: "Jun 2024",
      end: "Aug 2024",
      description:
        "In collaboration with Rhino agency, I developed the e-commerce platform for Sushi App. I was responsible for the technical front-end implementation, converting the UI/UX designs provided by the agency into a functional and high-performance web application using Astro, React, and Tailwind CSS.",
    },

  ],
  education: [
    {
      school: "Digital House",
      href: "https://github.com/ezestom/Courses-certificates-/blob/main/Ezequiel%20Stom_CTD_DH_PDF.pdf",
      degree: "Certified Tech Developer (CTD) - Digital House, Mercado Libre & Globant",
      logoUrl: "/dh.png",
      start: "2022",
      end: "2024",
    },
    {
      school: "Alura Latam",
      href: "https://github.com/ezestom/Oracle-Alura-One/blob/main/certificaciones/Ezequiel%20Federico%20Stom%20-%20Certificaci%C3%B3n%20Final%20-%20ONE.pdf",
      degree: "Oracle Next Education",
      logoUrl: "/one.png",
      start: "2023",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Cacta AI Assistant",
      href: "https://cacta.eco",
      dates: "",
      active: true,
      description:
        "[AI assistant](https://app-bot.vercel.app/), powered by Llama, that helps you easily understand your sustainability information.",
      technologies: [
        "Next.js",
        "Typescript",
        "Llama AI Api",
        "Shadcn UI",
      ],
      links: [
        {
          type: "App",
          href: "https://app-bot.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ezestom/next-bot",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "/videos/portfolio_bot.mp4",
    },
    {
      title: "Cacta Web",
      href: "https://cacta.eco",
      dates: "",
      active: true,
      description:
        "Official website for [Cacta Sustainability Solutions LLC](https://cacta.eco) . We develop innovative solutions that help companies lead the change towards a more sustainable future.",
      technologies: [
        "Astro",
        "Typescript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://cacta.eco",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/videos/portfolio_cacta.mp4",
    },
    {
      title: "Sambataro Arquitectos",
      href: "https://sambataroarquitectos.com",
      dates: "",
      active: true,
      description:
        "[Sambataro Arquitectos](https://sambataroarquitectos.com) A minimalist portfolio showcasing the architectural work of the studio. Working with a focus on clean lines and functional design.",
      technologies: [
        "Astro",
        "Typescript",
        "TailwindCSS",
        "CSS"
      ],
      links: [
        {
          type: "Website",
          href: "https://sambataroarquitectos.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "videos/portfolio_samba.mp4",
    },
    {
      title: "Steve English Profesor",
      href: "https://english-with-steve.vercel.app/",
      dates: "",
      active: true,
      description:
        "Ready to take your English to the next level? Learn with [Steve](https://english-with-steve.vercel.app/), an experienced teacher. Use the available resources, book your classes, and gain the confidence you need to speak fluently",
      technologies: [
        "Astro",
        "Typescript",
        "TailwindCSS",
        "CSS",

      ],
      links: [
        {
          type: "Website",
          href: "https://english-with-steve.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "/videos/portfolio_steve.mp4",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },

  ],
} as const;
