import AdminDashoard from "../pages/Admin/AdminDashoard";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashoard />,
  },
  {
    name: "Shop Management",
    children: [
      {
        name: "Create A. Product",
        path: "create-product",
        element: <AdminDashoard />,
      },
    ],
  },

  {
    name: "User Mangement",
    key: "User Mangement",
    children: [
      {
        name: "Create User",
        path: "create-student",
        element: <AdminDashoard />,
      },
    ],
  },
  {
    name: "Salse Management",
    children: [
      {
        name: "See all salse",
        path: "semester-registration",
        element: <AdminDashoard />,
      },
    ],
  },
];
