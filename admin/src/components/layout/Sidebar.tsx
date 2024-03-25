import { Layout, Menu } from "antd";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";

// import { TUser, useCurrentToken } from "../../redux/features/auth/authSlice";
// import { verifyToken } from "../../utils/veriflyToken";
import { adminPaths } from "../../routes/syner.admin.routes";
export type TUser = {
  userId: string;
  role: string;
  iat: number;
  exp: number;
};
const { Sider } = Layout;

const userRole = {
  ADMIN: "admin",
};

const Sidebar = () => {
  // const token = useAppSelector(useCurrentToken);

  let user = "admin";

  // if (token) {
  //   user = verifyToken(token);
  // }

  let sidebarItems;

  switch (user) {
    case userRole.ADMIN:
      sidebarItems = sidebarItemsGenerator(adminPaths, userRole.ADMIN);
      break;

    default:
      break;
  }
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{ height: "100vh", position: "sticky", top: "0", left: "0" }}
    >
      <div
        style={{
          color: "white",
          textAlign: "center",
          fontSize: "20px",
          fontWeight: "800",
          marginTop: "10px",
        }}
      >
        PH Uni
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
