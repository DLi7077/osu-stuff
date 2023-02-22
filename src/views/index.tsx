import Info from "./Info";
import Gameplay from "./Gameplay";
import Beatmaps from "./Beatmaps";
import Community from "./Community";

const HOMEPAGE = <Info />;

export const PAGE_ROUTES: PageRoute[] = [
  {
    path: "/",
    element: HOMEPAGE,
  },
  {
    path: "/info",
    element: <Info />,
  },
  {
    path: "/gameplay",
    element: <Gameplay />,
  },
  {
    path: "/beatmaps",
    element: <Beatmaps />,
  },
  {
    path: "/community",
    element: <Community />,
  },
];

export const PAGE_HUE: any = {
  "/": 335,
  "/info": 335,
  "/gameplay": 265,
  "/beatmaps": 200,
  "/community": 140,
};

export const PAGE_DETAILS: {
  path: Path;
  hue: number;
  label: string;
}[] = [
  {
    path: "/info",
    hue: 335,
    label: "Info",
  },
  {
    path: "/gameplay",
    hue: 265,
    label: "Gameplay",
  },
  {
    path: "/beatmaps",
    hue: 200,
    label: "Beatmaps",
  },
  {
    path: "/community",
    hue: 140,
    label: "Community",
  },
];
