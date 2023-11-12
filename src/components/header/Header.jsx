import { Container } from "../common/container/Container";
import Logo from "../logo/Logo";
import { HeaderStyled, NavLinks, NavLink, Wrap } from "./Header.styled";

export default function Header() {
  return (
    <HeaderStyled>
      <Wrap>
        <Logo />
        <NavLinks>
          <NavLink to="catalog">CATALOG</NavLink>
          <NavLink to="favorites">FAVORITES</NavLink>
        </NavLinks>
      </Wrap>
    </HeaderStyled>
  );
}
