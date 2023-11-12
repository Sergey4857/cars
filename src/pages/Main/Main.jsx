import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Header from "../../components/header/Header";
import { Wrap } from "./Main.styled";

export function Main() {
  return (
    <>
      <Header />

      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}
