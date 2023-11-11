import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "src/components/header/Header";

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
