import { TooltipTrigger } from "@radix-ui/react-tooltip";
import { AvatarFallback, Avatar, AvatarImage } from "../ui/avatar";
import { Tooltip, TooltipContent, TooltipProvider } from "../ui/tooltip";

const UserAvatar = () => {
  return (
    <div className="flex items-center gap-3">
      <Tooltip>
        <TooltipProvider>
          <TooltipTrigger>
            <div className="rounded-full ring-2 ring-primary">
              <Avatar>
                <AvatarFallback>A</AvatarFallback>
                <AvatarImage src="https:/github.com/dex-code61.png" />
              </Avatar>
            </div>
          </TooltipTrigger>
          <TooltipContent>Username</TooltipContent>
        </TooltipProvider>
      </Tooltip>

      <h2 className="hidden sm:flex font-medium text-muted-foreground text-base/relaxed">
        Username
      </h2>
    </div>
  );
};

export default UserAvatar;
