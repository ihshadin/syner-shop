import { NavLink } from "react-router-dom";
import { TSidbarItem, TUserPath } from "../types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const sidebarItemsGenerator = (items: TUserPath[], role: any) => {
  const sidebarItems = items.reduce((acc: TSidbarItem[], item) => {
    if (item.path && item.name) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
      });
    }

    if (item.children) {
      acc.push({
        key: item?.name,
        label: item.name,
        children: item.children.map((child) => {
          if (child.name) {
            return {
              key: child.name,
              label: (
                <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>
              ),
            };
          }
        }),
      });
    }

    return acc;
  }, []);

  return sidebarItems;
};
