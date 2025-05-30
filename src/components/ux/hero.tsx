import { useProfile } from "@/hooks/useProfile";
import { Badge } from "../ui/badge";

const Hero = () => {
  const { username, avatar } = useProfile();
  return (
    <div className="w-full flex items-center flex-col gap-3 justify-center my-12">
      <div className="w-48 h-48 min-h-24 min-w-24 rounded-full ring-2 ring-muted-foreground overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={avatar || "https://github.com/dex-code61.png"}
          alt={username || "Kanabo Déodat E."}
        />
      </div>
      <p className="w-full sm:w-2/3 text-base text-center text-muted-foreground">
        Je me nomme{" "}
        {
          <a
            target="_blank"
            href={
              username
                ? `https://github.com/${username}`
                : "https://github.com/dex-code61"
            }
          >
            <Badge variant="outline">{username || "Kanabo Déodat E."}</Badge>
          </a>
        }
        , développeur passionné par le {<Badge variant="outline">Web</Badge>} et
        les {<Badge variant="outline">technologies modernes</Badge>}, je conçois
        des applications {<Badge variant="outline">performantes</Badge>},
        esthétiques et centrées sur{" "}
        {<Badge variant="outline">l'utilisateur</Badge>}. Curieux et toujours en
        quête de nouveaux défis, j'aime transformer les idées en solutions{" "}
        {<Badge variant="outline">concrètes</Badge>}. Maîtrise de{" "}
        {<Badge variant="outline">JavaScript</Badge>},
        {<Badge variant="outline">React</Badge>},{" "}
        {<Badge variant="outline">Node.js</Badge>} et bien d'autres outils du
        développement moderne.
      </p>
    </div>
  );
};

export default Hero;
