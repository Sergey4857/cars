import { useState } from "react";
import ModalWindow from "../modal/modal";
import { DecorSpan } from "../modal/modal.styled";
import {
  Button,
  ContentImage,
  ModelNumb,
  ModelPrise,
  ModelTags,
  ModelText,
  ModelWrap,
  StyledItem,
  FavoriteButton,
  SvgHeart,
  ModelYear,
  ModelTag,
} from "./catalogItem.styled";

import sprite from "../../assets/imgs_sprite/sprite.svg";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addFavoriteCar, removeFavoriteCar } from "../../redux/CarsSlice";
import { selectFavoriteCars } from "../../redux/Selectors";

import defaultPicture from "../../assets/imgs_sprite/no_img_300x225.jpg";

export function CatalogItem(props) {
  const {
    id,
    year,
    make,
    model,
    img,
    description,
    rentalPrice,
    address,
    rentalCompany,
    rentalConditions,
    type,
    functionalities,
    accessories,
  } = props;
  const [openModal, setOpenModal] = useState(false);

  const [addFavorite, setAddFavorite] = useState(false);
  const favoriteCars = useSelector(selectFavoriteCars);

  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
  };

  const handleClick = () => {
    setAddFavorite(!addFavorite);
    if (favoriteCars.find((car) => car.id === id)) {
      dispatch(removeFavoriteCar(id));
      return;
    }
    if (!addFavorite) {
      dispatch(addFavoriteCar(props));
    }
  };

  return (
    <>
      <StyledItem>
        <FavoriteButton onClick={handleClick}>
          <SvgHeart width={18} height={18}>
            {favoriteCars.some((car) => car.id === id) ? (
              <use href={`${sprite}#icon-active`}></use>
            ) : (
              <use href={`${sprite}#icon-normal`}></use>
            )}
          </SvgHeart>
        </FavoriteButton>
        <ContentImage src={img ? img : defaultPicture}></ContentImage>
        <ModelWrap>
          <ModelText>{make}</ModelText>
          {model && <ModelNumb>{model},</ModelNumb>}{" "}
          <ModelYear>{year}</ModelYear>
          <ModelPrise>{rentalPrice}</ModelPrise>
        </ModelWrap>

        <ModelTags>
          <ModelTag>{address?.split(",")[1]}</ModelTag>
          <DecorSpan />
          <ModelTag>{address?.split(",")[2]}</ModelTag>
          <DecorSpan />
          <ModelTag>{rentalCompany}</ModelTag>
          <DecorSpan />
          <ModelTag>
            Premium {type.charAt(0).toUpperCase() + type.slice(1).toLowerCase()}
          </ModelTag>
          <DecorSpan />
          <ModelTag>{model}</ModelTag>
          <DecorSpan />
          <ModelTag>{accessories[1]}</ModelTag>
          <DecorSpan />
          <ModelTag> {id}</ModelTag>
        </ModelTags>

        <Button onClick={handleOpen}>Learn more</Button>
      </StyledItem>

      <ModalWindow
        data={props}
        onShow={openModal}
        onClose={handleClose}
      ></ModalWindow>
    </>
  );
}
