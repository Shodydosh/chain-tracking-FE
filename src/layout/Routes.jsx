import Auth from "../pages/Auth";
import Landing from "../pages/Landing";

const ROUTES = [
  {
    path: "/auth",
    element: <Auth />,
    routeId: 3
  },
  {
    path: "/",
    element: <Landing />,
    routeId: 1
  },
];

export default ROUTES;
