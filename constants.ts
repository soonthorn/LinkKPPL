import type { ProfileData } from './types';
import GitHubIcon from './components/icons/GitHubIcon';
import LinkedInIcon from './components/icons/LinkedInIcon';
import TwitterIcon from './components/icons/TwitterIcon';
import FacebookIcon from './components/icons/FacebookIcon';
import InstagramIcon from './components/icons/InstagramIcon';
import TiktokIcon from './components/icons/TiktokIcon';
import YoutubeIcon from './components/icons/YoutubeIcon';

export const PROFILE_DATA: ProfileData = {
  name: "ครัวพิศพิไล",
  handle: "@kruapitpilai",
  avatarUrl: "https://picsum.photos/seed/alex/200",
  bio: "นี่คือเว็บของฉัน ไม่ว่ามันจะเป็นยังไงมันก็คือเว็บของฉัน จะยากดีมีจนอย่างไร ฉันก็จะเข้าไปในเว็บของฉันอยู่ดี!",
  links: [
    {
      title: "เว็บของฉันเอง",
      url: "https://google.com",
    },
    {
      title: "Latest Project",
      url: "#",
    },
    {
      title: "Book a Mentoring Session",
      url: "#",
    },
    {
      title: "Subscribe to my Newsletter",
      url: "#",
    },
    {
      title: "เว็บนั้น",
      url: "#",
    },
  ],
  socialLinks: [
    {
      title: "Facebook",
      url: "#",
      icon: FacebookIcon,
    },
    {
      title: "Instagram",
      url: "#",
      icon: InstagramIcon,
    },
    {
      title: "TikTok",
      url: "#",
      icon: TiktokIcon,
    },
    {
      title: "YouTube",
      url: "#",
      icon: YoutubeIcon,
    },
  ],
};
