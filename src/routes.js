import Home from "./pages/Home";
import Cuties from "./pages/Cuties";
import Favs from "./pages/Favs";

const routes = [
  {
    path: "/",
    element: <Home />,
  }, 
  {
    path: "/cuties",
    element: <Cuties />,
  },
  {
    path: "/favs",
    element: <Favs />,
  }
];

export default routes;