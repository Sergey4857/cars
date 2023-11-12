import { LogoStyled } from "./Logo.styled";
import sprite from "../../assets/imgs_sprite/sprite.svg";
import { Svg } from "../filters/Filters.styled";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <>
      <LogoStyled to="/">
        CarsRentUA{" "}
        <Svg width={18} height={18}>
          <use href={`${sprite}#icon-rent`}></use>
        </Svg>
      </LogoStyled>
    </>
  );
}
