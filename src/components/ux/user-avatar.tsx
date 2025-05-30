import { TooltipTrigger } from "@radix-ui/react-tooltip";
import { AvatarFallback, Avatar, AvatarImage } from "../ui/avatar";
import { Tooltip, TooltipContent, TooltipProvider } from "../ui/tooltip";
import { useProfile } from "@/hooks/useProfile";
import { formatText } from "@/lib/utils";

const UserAvatar = () => {
  const { username, avatar } = useProfile();
  return (
    <div className="flex items-center gap-3">
      <Tooltip>
        <TooltipProvider>
          <TooltipTrigger>
            <div className="rounded-full ring-2 ring-primary">
              <Avatar>
                <AvatarFallback>
                  {" "}
                  {username?.split("")[0]?.toUpperCase() || "D"}
                </AvatarFallback>
                <AvatarImage
                  src={avatar || "https:/github.com/dex-code61.png"}
                />
              </Avatar>
            </div>
          </TooltipTrigger>
          <TooltipContent>{username || "Kanabo Déodat E."}</TooltipContent>
        </TooltipProvider>
      </Tooltip>

      <h2 className="font-medium text-muted-foreground text-base/relaxed">
        {formatText(username || "Kanabo Déodat E.", 10)}
      </h2>
    </div>
  );
};

export default UserAvatar;
