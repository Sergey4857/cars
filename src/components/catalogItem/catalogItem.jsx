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
} from "./catalogItem.styled";

import sprite from "../../assets/imgs_sprite/sprite.svg";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addFavoriteCar, removeFavoriteCar } from "../../redux/CarsSlice";
import { selectFavoriteCars } from "../../redux/Selectors";

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
        <ContentImage src={img}></ContentImage>
        <ModelWrap>
          <ModelText>{make}</ModelText>
          {model && <ModelNumb>{model},</ModelNumb>}{" "}
          <ModelText>{year}</ModelText>
          <ModelPrise>{rentalPrice}</ModelPrise>
        </ModelWrap>

        <ModelTags>
          {address?.split(",")[1]}
          <DecorSpan />
          {address?.split(",")[2]}
          <DecorSpan />
          {rentalCompany}
          <DecorSpan />
          Premium {type.charAt(0).toUpperCase() + type.slice(1).toLowerCase()}
          <DecorSpan />
          {model}
          <DecorSpan />
          {id}
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
