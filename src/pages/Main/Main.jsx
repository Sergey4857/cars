import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";

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
