import Navbar from "./components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import { PAGE_HUE, PAGE_ROUTES } from "./views";
import { cloneElement, useEffect, useState } from "react";
import useColorTheme from "./hooks/useColorTheme";
import "./index.css";

function App() {
  const DEFAULT_HUE = 335;
  const [pageHue, setPageHue] = useState<number>(DEFAULT_HUE);
  const [pageTheme, updateTheme] = useColorTheme(335);
  const location = useLocation();

  useEffect(() => {
    updateTheme(PAGE_HUE[location.pathname]);
    setPageHue(PAGE_HUE[location.pathname]);
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, [location.pathname]);

  const pageRoutes: JSX.Element[] = PAGE_ROUTES.map((page): JSX.Element => {
    const componentWithColorControl = cloneElement(page.element, {
      theme: pageTheme,
    });

    return (
      <Route
        key={page.path}
        path={page.path}
        element={componentWithColorControl}
      />
    );
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Navbar hue={pageHue} theme={pageTheme} />
      <Routes>{pageRoutes}</Routes>
    </div>
  );
}

export default App;
