import { Divider } from "@nextui-org/react";
import TopNav from "./TopNav";
import MidNavbar from "./MidNavbar";
import BottomNav from "./BottomNav";

const NavBar = () => {
  return (
    <div className="px-4 bg-[#0d344f]">
      <TopNav />
      <Divider className="mt-2 mb-3" />
      <MidNavbar />
      <BottomNav />
    </div>
  );
};

export default NavBar;