import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ROUTES } from "./appRoutes";
import Layout from "../components/layout/layout";
import { Suspense } from "react";
import LoadingScreen from "../screens/loading/loadingScreen";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingScreen />}>
      <Routes>
        <Route element={<Layout />}>
          {ROUTES.map((route, index) => {
            return (
              <Route key={index} path={route.path} element={route.element} />
            );
          })}
        </Route>
      </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
