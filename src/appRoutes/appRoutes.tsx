import { lazy } from "react";

const HomeScreen = lazy(() => import("../screens/homeScreen"));
const DriversScreen = lazy(() => import("../screens/drivers/driversScreen"));
const MediaScreen = lazy(() => import("../screens/media/mediaScreen"));

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
  {
    path: '/media',
    element: <MediaScreen /> 
  },
]