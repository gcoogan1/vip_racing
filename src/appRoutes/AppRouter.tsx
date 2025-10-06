import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ROUTES } from "./appRoutes";
import Layout from "../components/layout/layout";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          {ROUTES.map((route, index) => {
            return (
              <Route key={index} path={route.path} element={route.element} />
            );
          })}
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
