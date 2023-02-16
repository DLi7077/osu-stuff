import Info from "./Info";

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
];
