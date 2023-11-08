import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

export function Main() {
  return (
    <>
      <Link to="/">HomePage</Link>
      <Link to="catalog">catalog</Link>
      <Link to="favorites">favorites</Link>

      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}
