import { LogoStyled, SvgLogo } from "./Logo.styled";
import sprite from "../../assets/imgs_sprite/sprite.svg";
export default function Logo() {
  return (
    <LogoStyled to="/">
      CarsRentUA
      <SvgLogo width={30} height={30}>
        <use href={`${sprite}#icon-rent`}></use>
      </SvgLogo>
    </LogoStyled>
  );
}
