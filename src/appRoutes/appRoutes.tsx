import { lazy } from "react";
import ComingSoonScreen from "../screens/comingSoon/comingSoonScreen";

const HomeScreen = lazy(() => import("../screens/homeScreen"));
const DriversScreen = lazy(() => import("../screens/drivers/driversScreen"));
const MediaScreen = lazy(() => import("../screens/media/mediaScreen"));
const ShopScreen = lazy(() => import("../screens/shop/shopScreen"));
const OverviewScreen = lazy(() => import("../screens/leagues/overview/overviewScreen"));

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
  {
    path: '/shop',
    element: <ShopScreen />
  },
  {
    path: '/leagues',
    element: <OverviewScreen />
  },
  {
    path: '/leagues/vip-gt3',
    element: <ComingSoonScreen />
  },
  {
    path: '/leagues/vip-formula1',
    element: <ComingSoonScreen />
  },
  {
    path: '/leagues/vip-lobby',
    element: <ComingSoonScreen />

  },
  {
    path: '/competitions/gt-world-series',
    element: <ComingSoonScreen />
  },
  {
    path: '/competitions/naughty-racing-league',
    element: <ComingSoonScreen />
  },
]