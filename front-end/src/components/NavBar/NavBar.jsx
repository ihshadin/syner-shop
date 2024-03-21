import { Divider } from "@nextui-org/react";
import TopNav from "./TopNav";
import MidNavbar from "./MidNavbar";
import BottomNav from "./BottomNav";

const NavBar = () => {
  return (
    <div className="syner-secondary-bg">
      <div className="hidden md:block">
        <TopNav />
        <Divider className="mt-2 bg-[var(--text-color)] absolute top-8 left-0 w-full" />
        <MidNavbar />
        <BottomNav />
      </div>
    </div>
  );
};

export default NavBar;
