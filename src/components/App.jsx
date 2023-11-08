import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Catalog from "../pages/CatalogPage/Catalog";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import { Favorites } from "../pages/FavoritesPage/Favorites";

import { HomePage } from "../pages/HomePage/HomePage";
import { Main } from "../pages/Main/Main";

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
