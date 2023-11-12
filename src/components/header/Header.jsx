import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import { HeaderStyled } from "./Header.styled";

export default function Header() {
  return (
    <HeaderStyled>
      <Logo />
      <Link to="catalog">CATALOG</Link>
      <Link to="favorites">FAVORITES</Link>
    </HeaderStyled>
  );
}
