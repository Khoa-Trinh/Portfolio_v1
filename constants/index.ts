import ChatGPT from "@/public/logos-svg/support/1681038628chatgpt-icon-logo 1.svg";
import GithubCopilot from "@/public/logos-svg/support/GitHub_Copilot_logo (1) 1.svg";
import Sketchfab from "@/public/logos-svg/support/Sketchfab_logo (1) 1.svg";
import StackOverflow from "@/public/logos-svg/support/Stack_Overflow_logo 1.svg";
import Vercel from "@/public/logos-svg/support/Vercel_logo_black (1) 1.svg";
import Youtube from "@/public/logos-svg/support/YouTube_Logo_2017 (1) 1.svg";
import Ballon from '@/public/icons-svg/balloon.svg'
import Cake from '@/public/icons-svg/birthday-cake.svg'

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

export const aboutme_main: BetterCard[] = [
  {
    title: "Day of birth:",
    description: "xx - xx - 2009",
    icons: [
      {
        url: Ballon,
        position: ["top-left", 0, 0],
      },
      {
        url: Ballon,
        position: ["top-right", 0, 0],
      },
      {
        url: Ballon,
        position: ["bottom-left", 0, 0],
      },
      {
        url: Cake,
        position: ["bottom-right", 0, 0],
      },
    ],
  },
];
