import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

export function HomePage() {
  return (
    <>
      <Link to="/">HomePage</Link>
      <Link to="catalog">catalog</Link>
      <Link to="favorites">favorites</Link>

      <p>Its homepage</p>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}
