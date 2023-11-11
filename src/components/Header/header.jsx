import { Link } from "react-router-dom";
import { Wrap } from "./Header.styled";

export default function Header() {
  return (
    <>
      <Wrap>
        {/* <Link to="/">HomePage</Link> */}
        <Link to="catalog">catalog</Link>
        <Link to="favorites">favorites</Link>
      </Wrap>
    </>
  );
}
