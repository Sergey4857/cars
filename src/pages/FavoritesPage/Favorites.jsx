import { useDispatch, useSelector } from "react-redux";

import { DecorSpan } from "../../components/modal/modal.styled";
import { removeFavoriteCar } from "../../redux/CarsSlice";
import { selectFavoriteCars } from "../../redux/Selectors";
import { Backround } from "../FavoritesPage/Favorites.styled";

import defaultPicture from "../../assets/imgs_sprite/no_img_300x225.jpg";

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
    <Backround>
      {favoriteCars.length > 0 && <Title>Your favorite cars:</Title>}
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
            <CarImage
              src={data.img}
              onError={(e) => {
                e.target.src = defaultPicture;
              }}
            ></CarImage>

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
    </Backround>
  );
}
