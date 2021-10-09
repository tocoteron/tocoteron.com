// eslint-disable-next-line import/no-cycle
export { default } from "./Routes";

export type RoutePath = "/" | "/blog";

export interface RoutePathWithDescription {
  path: RoutePath;
  summary: string;
  description: string;
}

export const navigations: RoutePathWithDescription[] = [
  {
    path: "/",
    summary: "Home",
    description: "",
  },
  {
    path: "/blog",
    summary: "Blog",
    description: "",
  },
];
