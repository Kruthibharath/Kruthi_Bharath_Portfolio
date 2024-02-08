import { SocialMedia } from "./socialmedia.types";
import socialMediaIcons from "../../utils/SocialMediaIcons";
export const SocialMediaData: SocialMedia[] = [
  {
    id: 1,
    name: "linkedin",
    link: "https://www.linkedin.com/in/kruthi-bharath-64508130/",
    imageUrl: socialMediaIcons.linkedinIcon,
    description: "Connect me on Linkedin",
  },
  {
    id: 2,
    name: "github",
    link: "https://github.com/Kruthibharath",
    imageUrl: socialMediaIcons.githubIcon,
    description: "View my to github repos",
  },
  {
    id: 3,
    name: "facebook",
    link: "https://www.facebook.com/kruthi.annegowda",
    imageUrl: socialMediaIcons.facebookIcon,
    description: "Friend me on Facebook",
  },
  {
    id: 4,
    name: "instagram",
    link: "https://www.instagram.com/kruthibharath",
    imageUrl: socialMediaIcons.instagramIcon,
    description: "Follow me on Instagram",
  },
];
