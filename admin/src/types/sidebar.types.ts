import { ReactNode } from "react";

export type TUserPath = {
  name?: string;
  path?: string;
  element?: ReactNode;
  children?: TUserPath[];
};

export type TSidbarItem =
  | {
      key: string;
      label: ReactNode;
      children?: TSidbarItem[];
    }
  | undefined;

export type TRoute = {
  path: string;
  element: ReactNode;
};
