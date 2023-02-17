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
    path: "/origin",
    element: <Community />,
  },
];
