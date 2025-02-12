import ChatGPT from "@/public/logos-svg/support/1681038628chatgpt-icon-logo 1.svg";
import GithubCopilot from "@/public/logos-svg/support/GitHub_Copilot_logo (1) 1.svg";
import Sketchfab from "@/public/logos-svg/support/Sketchfab_logo (1) 1.svg";
import StackOverflow from "@/public/logos-svg/support/Stack_Overflow_logo 1.svg";
import Vercel from "@/public/logos-svg/support/Vercel_logo_black (1) 1.svg";
import Youtube from "@/public/logos-svg/support/YouTube_Logo_2017 (1) 1.svg";
import Ballon from "@/public/icons-svg/balloon.svg";
import Cake from "@/public/icons-svg/birthday-cake.svg";
import Phone from "@/public/icons-svg/phone-calling-rounded.svg";
import DialPad from "@/public/icons-svg/dial-pad.svg";
import Age16 from "@/public/icons-svg/age-16.svg";
import Gender from "@/public/icons-svg/male.svg";
import HtmlTag from "@/public/icons-svg/html-coding.svg";
import Html from "@/public/icons-svg/html.svg";
import Css from "@/public/icons-svg/css3.svg";
import Monitor from "@/public/icons-svg/computer.svg";
import Mausoleum from "@/public/icons-svg/ho-chi-ming-mausoleum.svg";
import City from "@/public/icons-svg/city.svg";
import Skill from "@/public/icons-svg/skill.svg";
import Solid from "@/public/icons-svg/advanced-solutions-lab.svg";
import Mail from "@/public/icons-svg/mail.svg";
import Contact from "@/public/icons-svg/contact-book.svg";
import Share from "@/public/icons-svg/share-alt.svg";
import Programming from "@/public/icons-svg/computer-programmer-software-engineer-coder-software-developer.svg";
import StudentBook from "@/public/icons-svg/student-book.svg";
import Javascript from "@/public/icons-svg/javascript-logo.svg";
import Typescript from "@/public/icons-svg/typescript-icon.svg";
import C from "@/public/icons-svg/C_Programming_Language.svg";
import CSharp from "@/public/icons-svg/Logo_C_sharp.svg";
import Python from "@/public/icons-svg/python.svg";
import Java from "@/public/icons-svg/java.svg";
import SQL from "@/public/icons-svg/sql.svg";
import Bash from "@/public/icons-svg/terminal.svg";
import Vscode from '@/public/icons-svg/vscode.svg'
import Neovim from '@/public/icons-svg/Neovim-logo.svg'
import Plus from '@/public/icons-svg/plus.svg'
import Books from '@/public/icons-svg/books-book.svg'
import Roadmap from '@/public/icons-svg/roadmap.svg'
import Age6 from '@/public/icons-svg/age-6.svg'
import Boy from '@/public/icons-svg/avatar-boy-kid.svg'
import AsianS from '@/public/icons-svg/The Asian International School.svg'
import Teenager from '@/public/icons-svg/Teenager.svg'
import LDCS from '@/public/icons-svg/Luong Dinh Cua Secondary School.svg'
import NTMS from '@/public/icons-svg/Ngo Thoi Nhiem High School Logo.svg'
import PTNKS from '@/public/icons-svg/Logo_Truong_PTNK.svg'
import Scratch from '@/public/icons-svg/ScratchCat3.0.svg'
import ScratchCode from '@/public/icons-svg/Scratch-code-snippet-3d.svg'
import MindX from '@/public/icons-svg/MindX.svg'
import Smiling from '@/public/icons-svg/smiling-face-with-sunglasses.svg'
import React from '@/public/icons-svg/React-icon.svg'
import Node from '@/public/icons-svg/Node.js_logo.svg'
import MLTech from '@/public/icons-svg/MLTech-Academy-Main_Logo.svg'
import Logo from '@/public/logos-svg/main/Logo.png'

export const navigationItems = [
  { label: "About me", href: "#aboutme" },
  { label: "Resume", href: "#resume" },
  { label: "Projects", href: "#projects" },
  { label: "Contacts", href: "#contacts" },
];

export const supportedLogos = [
  { logo: ChatGPT, aspect: "aspect-[17/5]" },
  { logo: GithubCopilot, aspect: "aspect-[399/50]" },
  { logo: Sketchfab, aspect: "aspect-[121/25]" },
  { logo: StackOverflow, aspect: "aspect-[51/10]" },
  { logo: Vercel, aspect: "aspect-[109/25]" },
  { logo: Youtube, aspect: "aspect-[112/25]" },
];

export const aboutmeMain: AboutmeMain[] = [
  {
    title: "Day of birth:",
    description: "xx - xx - 2009",
    icons: [
      {
        url: Ballon,
        position: ["top-left", 0, 0],
        rotate: 0,
        size: [3.125, 3.125],
      },
      {
        url: Ballon,
        position: ["top-right", 0, 0],
        rotate: 0,
        size: [3.125, 3.125],
      },
      {
        url: Ballon,
        position: ["bottom-left", 0, 0],
        rotate: 0,
        size: [3.125, 3.125],
      },
      {
        url: Cake,
        position: ["bottom-right", 0, 0],
        rotate: 0,
        size: [3.125, 3.125],
      },
    ],
  },
  {
    title: "Phone number:",
    description: "091851****",
    icons: [
      {
        url: Phone,
        position: ["bottom-left", 0, 0],
        rotate: 0,
        size: [3.125, 3.125],
      },
      {
        url: DialPad,
        position: ["bottom-right", 0, 0],
        rotate: 0,
        size: [3.125, 3.125],
      },
    ],
  },
  {
    title: "Age and gender:",
    description: "16 and i’m male",
    icons: [
      {
        url: Age16,
        position: ["bottom-left", 0, 0],
        rotate: 0,
        size: [3.125, 3.125],
      },
      {
        url: Gender,
        position: ["bottom-right", 0, 0],
        rotate: 0,
        size: [3.125, 3.125],
      },
    ],
  },
  {
    title: "Website:",
    description: "khoa.mhpteam.dev",
    icons: [
      {
        url: HtmlTag,
        position: ["top-right", 0, 0],
        rotate: 0,
        size: [3.125, 3.125],
      },
      {
        url: HtmlTag,
        position: ["bottom-right", 0, 0],
        rotate: 0,
        size: [3.125, 3.125],
      },
      {
        url: HtmlTag,
        position: ["bottom-right", 0, 0],
        rotate: 0,
        size: [3.125, 3.125],
      },
      {
        url: Html,
        position: ["bottom-left", 0, 0],
        rotate: 0,
        size: [3.125, 3.125],
      },
      {
        url: Css,
        position: ["bottom-left", 0, 0],
        rotate: 0,
        size: [3.125, 3.125],
      },
      {
        url: Monitor,
        position: ["bottom-left", 0, 0],
        rotate: 0,
        size: [3.125, 3.125],
      },
    ],
  },
  {
    title: "City:",
    description: "Hồ Chí Minh",
    icons: [
      {
        url: Mausoleum,
        position: ["top-left", 0, 0],
        rotate: 0,
        size: [3.125, 3.125],
      },
      {
        url: City,
        position: ["bottom-right", 0, 0],
        rotate: 0,
        size: [3.125, 3.125],
      },
    ],
  },
  {
    title: "Skill level:",
    description: "Senior",
    icons: [
      {
        url: Skill,
        position: ["top-left", 0, 0],
        rotate: 0,
        size: [3.125, 3.125],
      },
      {
        url: Solid,
        position: ["bottom-right", 0, 0],
        rotate: 0,
        size: [3.125, 3.125],
      },
    ],
  },
  {
    title: "Email:",
    description: "kelvintrinh09@gmail.com",
    type: "long",
    icons: [
      {
        url: Mail,
        position: ["bottom-left", 0, 0],
        rotate: 0,
        size: [3.125, 3.125],
      },
      {
        url: Contact,
        position: ["top-right", 0, 0],
        rotate: 0,
        size: [3.125, 3.125],
      },
      {
        url: Share,
        position: ["bottom-right", 0, 0],
        rotate: 0,
        size: [3.125, 3.125],
      },
    ],
  },
  {
    title: "Job:",
    description: "Developer & Student",
    icons: [
      {
        url: Programming,
        position: ["bottom-left", 0, 0],
        rotate: 0,
        size: [3.125, 3.125],
      },
      {
        url: StudentBook,
        position: ["bottom-right", 0, 0],
        rotate: 0,
        size: [3.125, 3.125],
      },
    ],
  },
];

export const aboutmeSkill: AboutmeSkill[] = [
  {
    url: Html,
    pLanguage: "HTML",
    progress: 60,
  },
  {
    url: Css,
    pLanguage: "CSS",
    progress: 40,
  },
  {
    url: Javascript,
    pLanguage: "JAVASCRIPT",
    progress: 90,
  },
  {
    url: Typescript,
    pLanguage: "TYPESCRIPT",
    progress: 80,
  },
  {
    url: C,
    pLanguage: "C",
    progress: 0,
  },
  {
    url: CSharp,
    pLanguage: "C#",
    progress: 5,
  },
  {
    url: Python,
    pLanguage: "PYTHON",
    progress: 10,
  },
  {
    url: Java,
    pLanguage: "JAVA",
    progress: 2,
  },
  {
    url: SQL,
    pLanguage: "SQL",
    progress: 60,
  },
  {
    url: Bash,
    pLanguage: "BASH",
    progress: 70,
  },
];

export const aboutmeFunFact: AboutmeFunFact[] = [
  {
    title: "My VsCode setup:",
    description: "I’m using Vscode + Neovim makes my productivity lots better",
    icons: [
      {
        url: Vscode,
        position: ["top-left", 0, 0],
        rotate: 0,
        size: [3.125, 3.125],
      },
      {
        url: Plus,
        position: ["top-left", 0, 0],
        rotate: 0,
        size: [3.125, 3.125],
      },
      {
        url: Neovim,
        position: ["bottom-right", 0, 0],
        rotate: 0,
        size: [3.125, 3.125],
      },
    ],
  },
  {
    title: "43",
    description: "Is the number of project has been implemented so far",
    icons: [
      {
        url: Roadmap,
        position: ["top-left", 0, 0],
        rotate: 0,
        size: [3.125, 3.125],
      },
      {
        url: Books,
        position: ["bottom-right", 0, 0],
        rotate: 0,
        size: [3.125, 3.125],
      },
    ],
  },
  {
    title: "6 hours:",
    description: "Average hours of programming per day",
    icons: [
      {
        url: Programming,
        position: ["top-left", 0, 0],
        rotate: 0,
        size: [3.125, 3.125],
      },
      {
        url: Age6,
        position: ["bottom-right", 0, 0],
        rotate: 0,
        size: [3.125, 3.125],
      },
    ],
  },
  {
    title: "My goals:",
    description: "Learn and become more proficient in python, c, c#, bash languages ​​to develop better in backend",
    icons: [
      {
        url: Python,
        position: ["top-left", 0, 0],
        rotate: 0,
        size: [3.125, 3.125],
      },
      {
        url: C,
        position: ["top-right", 0, 0],
        rotate: 0,
        size: [3.125, 3.125],
      },
      {
        url: CSharp,
        position: ["bottom-left", 0, 0],
        rotate: 0,
        size: [3.125, 3.125],
      },
      {
        url: Bash,
        position: ["bottom-right", 0, 0],
        rotate: 0,
        size: [3.125, 3.125],
      },
    ],
  },
];

export const resumeEducation: ResumeEducation[] = [
  {
    title: "The Asian International School",
    description: "177-185 Nguyen Van Huong, Thao Dien Ward, Thu Duc City, HCMC",
    time: "2015 - 2021",
    icons: [
      {
        url: Boy,
        position: ["top-left", 0, 0],
        rotate: 0,
        size: [3.125, 3.125],
      },
      {
        url: AsianS,
        position: ["bottom-right", 0, 0],
        rotate: 0,
        size: [3.125, 3.125],
      },
    ],
  },
  {
    title: "Luong Dinh Cua Secondary School",
    description: "No. 37, Le Hien Mai Street, Thanh My Loi Ward, Thu Duc City, HCMC",
    time: "2021 - 2022",
    icons: [
      {
        url: Teenager,
        position: ["bottom-left", 0, 0],
        rotate: 0,
        size: [3.125, 3.125],
      },
      {
        url: LDCS,
        position: ["bottom-right", 0, 0],
        rotate: 0,
        size: [3.125, 3.125],
      },
    ],
  },
  {
    title: "Ngo Thoi Nhiem Primary, Secondary and High School System",
    description: "65D Ho Ba Phan, Phuoc Long A, Thu Duc City, HCMC",
    time: "2022 - 2024",
    icons: [
      {
        url: Teenager,
        position: ["top-left", 0, 0],
        rotate: 0,
        size: [3.125, 3.125],
      },
      {
        url: NTMS,
        position: ["bottom-right", 0, 0],
        rotate: 0,
        size: [3.125, 3.125],
      },
    ],
  },
  {
    title: "Specialized in Information Technology - Gifted High School, VNU-HCM",
    description: "Ward 6, Linh Trung Ward, Thu Duc District, HCMC",
    time: "2024 - Now",
    icons: [
      {
        url: PTNKS,
        position: ["bottom-left", 0, 0],
        rotate: 0,
        size: [3.125, 3.125],
      },
      {
        url: Programming,
        position: ["bottom-right", 0, 0],
        rotate: 0,
        size: [3.125, 3.125],
      },
    ],
  },
]

export const resumeExperiment: ResumeExperience[] = [
  {
    title: "Self taught Scratch on Youtube",
    description: "I found Scratch programming is like playing with Lego, which is very interesting to me",
    time: "2019 - 2021",
    icons: [
      {
        url: Scratch,
        position: ["bottom-left", 0, 0],
        rotate: 0,
        size: [3.125, 3.125],
      },
      {
        url: ScratchCode,
        position: ["bottom-right", 0, 0],
        rotate: 0,
        size: [3.125, 3.125],
      },
    ],
  },
  {
    title: "Start learning the basics of web development with MindX",
    description: "I found that web development might be better than Scratch so I gave it a try and I was right",
    time: "Mar - Sept 2024",
    month: true,
    icons: [
      {
        url: MindX,
        position: ["bottom-left", 0, 0],
        rotate: 0,
        size: [3.125, 3.125],
      },
      {
        url: Smiling,
        position: ["bottom-right", 0, 0],
        rotate: 0,
        size: [3.125, 3.125],
      },
    ],
  },
  {
    title: "Internship at MLTech Academy",
    description: "I was taught about MERN (MongoDB, Express Js, React, Nodejs) and important concepts",
    time: "Jul - Sept 2024",
    month: true,
    icons: [
      {
        url: React,
        position: ["top-right", 0, 0],
        rotate: 0,
        size: [3.125, 3.125],
      },
      {
        url: Node,
        position: ["bottom-right", 0, 0],
        rotate: 0,
        size: [3.125, 3.125],
      },
      {
        url: MLTech,
        position: ["bottom-left", 0, 0],
        rotate: 0,
        size: [3.125, 3.125],
      },
    ],
  },
  {
    title: "A member of MHP Team",
    description: "My classmate is the founder of MHP Team",
    time: "2025 - Now",
    icons: [
      {
        url: Logo,
        position: ["bottom-left", 0, 0],
        rotate: 0,
        size: [3.125, 3.125],
      },
      {
        url: Plus,
        position: ["bottom-left", 0, 0],
        rotate: 0,
        size: [3.125, 3.125],
      },
      {
        url: 'MHP Team',
        position: ["bottom-right", 0, 0],
        rotate: 0,
        size: [3.125, 3.125],
      },
    ],
  },
]
