import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { HeaderCommon } from "../../components/headerCommon/headerCommon";

export function Main() {
  return (
    <>
      <HeaderCommon />
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}
