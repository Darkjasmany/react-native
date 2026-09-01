import { Ionicons } from "@expo/vector-icons";

interface MenuRote {
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  name: string;
}

export const menuRoutes: MenuRote[] = [
  {
    title: "Pull to refresh",
    icon: "refresh-outline",
    name: "pull-to-refresh/index",
  },
  {
    title: "Section List",
    icon: "list-outline",
    name: "section-list/index",
  },
  {
    title: "Modal",
    icon: "copy-outline",
    name: "modal/index",
  },
  {
    title: "InfiniteScroll",
    icon: "download-outline",
    name: "infinite-scroll/index",
  },
  {
    title: "Slides",
    icon: "flower-outline",
    name: "slides/index",
  },
  {
    title: "Themes",
    icon: "flask-outline",
    name: "themes/index",
  },
];

export const uiMenuRoutes: MenuRote[] = [
  {
    title: "Switches",
    icon: "toggle-outline",
    name: "switches/index",
  },
  {
    title: "Alerts",
    icon: "alert-circle-outline",
    name: "alerts/index",
  },
  {
    title: "TextInputs",
    icon: "document-text-outline",
    name: "text-inputs/index",
  },
];

export const animationMenuRoutes: MenuRote[] = [
  {
    title: "Animation 101",
    icon: "cube-outline",
    name: "animation-101/index",
  },
  {
    title: "Animation 102",
    icon: "albums-outline",
    name: "animation-102/index",
  },
];

export const allRoutes: MenuRote[] = [
  ...menuRoutes,
  ...uiMenuRoutes,
  ...animationMenuRoutes,
];
