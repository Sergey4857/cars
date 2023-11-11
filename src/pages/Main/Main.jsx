import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "../../components/common/container/Container";

export function Main() {
  return (
    <>
      <Container />
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}
