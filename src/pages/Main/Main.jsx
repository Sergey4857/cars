import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export function Main() {
  return (
    <>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}
