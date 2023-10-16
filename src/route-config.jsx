import { About } from "./pages/about/About";
import { FastFood } from "./pages/fastFood/FastFood";
import { Food } from "./pages/food/Food";
import { IceCream } from "./pages/iceCream/IceCream";
import { MainPage } from "./pages/main/MainPage";

export const routes = [
  {
    path: "/",
    element: <MainPage />
  },
  {
    path: "/ice-cream",
    element: <IceCream />
  },
  {
    path: "/fast-food",
    element: <FastFood />
  },
  {
    path: "/food",
    element: <Food />
  },
  {
    path: "/about",
    element: <About />
  }
];
