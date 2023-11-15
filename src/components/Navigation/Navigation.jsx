import { NavLinks, NavLink } from "./Navigation.styled";

export default function Navigation() {
  return (
    <NavLinks>
      <NavLink to="catalog">CATALOG</NavLink>
      <NavLink to="favorites">FAVORITES</NavLink>
    </NavLinks>
  );
}
