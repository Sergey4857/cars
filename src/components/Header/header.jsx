import { Link } from "react-router-dom";

export function Header() {
  return (
    <>
      <Link to="/">HomePage</Link>
      <Link to="catalog">catalog</Link>
      <Link to="favorites">favorites</Link>
    </>
  );
}
