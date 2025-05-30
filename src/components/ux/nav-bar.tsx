// import { ModeToggle } from "../ui/mode-toggle";
import Socials from "./socials";
import UserAvatar from "./user-avatar";

const NavBar = () => {
  return (
    <div className="w-full py-3 z-[5] flex items-center justify-between">
      <UserAvatar />
      {/* <ModeToggle /> */}
      <Socials />
    </div>
  );
};

export default NavBar;
