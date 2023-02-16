import Info from "./Info";
import Gameplay from "./Gameplay";

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
];
