import Home from "../screens/home";

type Route = {
  path: string;
  element: React.ReactNode;
};

export const ROUTES: Route[] = [
  {
    path: '/',
    element: <Home /> 
  }
]