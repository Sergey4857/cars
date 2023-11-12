import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalWindow from "../../components/modal/modal";
import { DecorSpan } from "../../components/modal/modal.styled";
import { removeFavoriteCar } from "../../redux/CarsSlice";
import { selectFavoriteCars } from "../../redux/Selectors";
import { Wrap } from "../Main/Main.styled";

import {
  CarBtnDel,
  CarImage,
  CarLi,
  CarName,
  CarUl,
  Title,
} from "./Favorites.styled";

export function Favorites() {
  const favoriteCars = useSelector(selectFavoriteCars);
  const dispatch = useDispatch();

  return (
    <Wrap>
      <Title>Your favorite cars:</Title>
      <CarUl>
        {favoriteCars?.map((data) => (
          <CarLi key={data.id}>
            <CarName>{data.make}</CarName>
            <DecorSpan />
            <CarName>{data.model}</CarName>
            <DecorSpan />
            <CarName>{data.year}</CarName>
            <DecorSpan />
            <CarName>{data.engineSize}</CarName>
            <DecorSpan />
            <CarName>{data.fuelConsumption}</CarName>
            <DecorSpan />
            <CarName>{data.rentalPrice}</CarName>
            <DecorSpan />
            <CarImage src={data.img}></CarImage>

            <CarBtnDel
              onClick={() => {
                dispatch(removeFavoriteCar(data.id));
              }}
            >
              Delete
            </CarBtnDel>
          </CarLi>
        ))}
      </CarUl>
    </Wrap>
  );
}
