import { useSelector } from "react-redux";
import { selectFavoriteCars } from "../../redux/Selectors";

import { Title } from "./Favorites.styled";

export function Favorites() {
  const favoriteCars = useSelector(selectFavoriteCars);
  console.log(favoriteCars);

  return <Title>Your favorite cars</Title>;
}
