import { useProfile } from "@/hooks/useProfile";
import SocialLink from "./social-link";
import { Code, Github, Linkedin } from "lucide-react";

const Socials = () => {
  const { socials } = useProfile();
  const mySocials = [
    {
      name: "Github",
      link: "https://github.com/dex-code61",
      icon: Github,
    },
    {
      name: "LinkedIn",
      link: "https://linkedin/in/kanabo-deodat-etiam",
      icon: Linkedin,
    },
    {
      name: "Dev.to",
      link: "https://dev.to/dex-code61",
      icon: Code,
    },
  ];
  return (
    <div className="flex items-center gap-2">
      {((socials.length > 0 && socials) || mySocials).map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="hidden sm:flex text-sm text-muted-foreground hover:text-foreground transition-all delay-150">
            {" "}
            {social.name}{" "}
          </p>
          <div className="flex sm:hidden">
            <SocialLink link={social} />
          </div>
        </a>
      ))}
    </div>
  );
};

export default Socials;
