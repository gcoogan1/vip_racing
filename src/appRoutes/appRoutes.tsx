import { lazy } from "react";
import LoadingScreen from "../screens/loading/loadingScreen";

const HomeScreen = lazy(() => import("../screens/homeScreen"));
const DriversScreen = lazy(() => import("../screens/drivers/driversScreen"));

type Route = {
  path: string;
  element: React.ReactNode;
};

export const ROUTES: Route[] = [
  {
    path: '/',
    element: <HomeScreen/> 
  },
  {
    path: '/drivers',
    element: <DriversScreen /> 
  },
]