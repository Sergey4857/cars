import { Link } from "react-router-dom";
import { HeaderStyled } from "./Header.styled";

export default function Header() {
  return (
    <HeaderStyled>
      <Link to="/">HOMEPAGE</Link>
      <Link to="catalog">CATALOG</Link>
      <Link to="favorites">FAVORITES</Link>
    </HeaderStyled>
  );
}
