import HomeScreen from "../screens/homeScreen";

type Route = {
  path: string;
  element: React.ReactNode;
};

export const ROUTES: Route[] = [
  {
    path: '/',
    element: <HomeScreen/> 
  }
]