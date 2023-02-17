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
