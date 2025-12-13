import { lazy } from "react";
import ComingSoonScreen from "../screens/comingSoon/comingSoonScreen";
import VipMonthly from "../screens/leagues/vipMonthly/vipMonthly";

const HomeScreen = lazy(() => import("../screens/homeScreen"));
const DriversScreen = lazy(() => import("../screens/drivers/driversScreen"));
const MediaScreen = lazy(() => import("../screens/media/mediaScreen"));
const ShopScreen = lazy(() => import("../screens/shop/shopScreen"));
// const VipChampionshipScreen = lazy(() => import("../screens/leagues/vipChampionship/vipChampionship"));

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
  // {
  //   path: '/leagues',
  //   element: <VipChampionshipScreen />
  // },
  {
    path: '/leagues/vip-gt3',
    element: <ComingSoonScreen />
  },
  {
    path: '/leagues/vip-monthly-lobby',
    element: <VipMonthly />
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