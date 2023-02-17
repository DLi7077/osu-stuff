import Navbar from "./components/Navbar";
import "./index.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { PAGE_HUE, PAGE_ROUTES } from "./views";
import { cloneElement, useEffect, useState } from "react";
import useColorTheme from "./hooks/useColorTheme";

function App() {
  const DEFAULT_HUE = 335;
  const [pageHue, setPageHue] = useState(DEFAULT_HUE);
  const [pageTheme, updateTheme] = useColorTheme(335);
  const location = useLocation();

  useEffect(() => {
    updateTheme(PAGE_HUE[location.pathname]);
    setPageHue(PAGE_HUE[location.pathname]);

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
      <Navbar hue={pageHue} />
      <Routes>{pageRoutes}</Routes>
    </div>
  );
}

export default App;
