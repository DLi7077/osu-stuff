import Navbar from "./components/Navbar";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import { PAGE_ROUTES } from "./views";

function App() {
  const pageRoutes: JSX.Element[] = PAGE_ROUTES.map(
    (page): JSX.Element => (
      <Route key={page.path} path={page.path} element={page.element} />
    )
  );

  return (
    <>
      <Navbar />
      <Routes>{pageRoutes}</Routes>
    </>
  );
}

export default App;
