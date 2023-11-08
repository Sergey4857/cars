import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Catalog from "../pages/catalog";
import { ErrorPage } from "../pages/ErrorPage";
import { Favorites } from "../pages/favorites";

import { HomePage } from "../pages/homePage";
import { Main } from "../pages/Main";

const ROUTER = {
  HOMEPAGE: "/",
  CATALOG: "catalog",
  FAVORITES: "favorites",
};

const router = createBrowserRouter(
  [
    {
      path: ROUTER.HOMEPAGE,
      errorElement: <ErrorPage />,
      element: <Main />,
      children: [
        {
          path: ROUTER.HOMEPAGE,
          element: <HomePage />,
        },
        {
          path: ROUTER.CATALOG,
          element: <Catalog />,
        },

        {
          path: ROUTER.FAVORITES,
          element: <Favorites />,
        },
      ],
    },
  ],
  {
    basename: "/cars/",
  }
);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
