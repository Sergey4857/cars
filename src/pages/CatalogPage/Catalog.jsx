import { useEffect, useState } from "react";

import axios from "axios";
import { Container } from "../../components/common/container/Container";
import { CatalogList } from "../../components/catalogLIst/catalogList";
import { LoadMore } from "./Catalog.styled";
import Filters from "../../components/filters/Filters";
import { useSelector } from "react-redux";
import { selectFilter } from "../../redux/Selectors";
import { Wrap } from "../Main/Main.styled";
const BaseUrl = "https://654e19fbcbc3253557425b91.mockapi.io";

export function Catalog() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(12);
  const [isLoading, setIsLoading] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const filter = useSelector(selectFilter);

  const filterCars = (car) => {
    const isBrandMatch =
      !filter.brand ||
      filter.brand === "All brands" ||
      car.make === filter.brand;

    const isPriceMatch =
      !filter.price ||
      filter.price === "All" ||
      parseInt(car.rentalPrice?.slice(1), 10) === filter.price;

    const isMileageMatch =
      !filter.from ||
      !filter.to ||
      (car.mileage >= filter.from && car.mileage <= filter.to);

    return isBrandMatch && isPriceMatch && isMileageMatch;
  };

  const filteredCars = data?.filter(filterCars);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `${BaseUrl}/advert/?limit=${perPage}&page=${page}`
        );

        if (response?.data.length < 12) {
          setShowButton(false);
        }
        setData((prev) => {
          if (page === 1) {
            return response.data;
          } else {
            return [...prev, ...response.data];
          }
        });

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [page, perPage]);

  return (
    <Wrap>
      <Container>
        <Filters />
        <CatalogList data={filteredCars} />
        {showButton && !isLoading && (
          <LoadMore
            onClick={() => {
              setPage(page + 1);
            }}
          >
            Load more
          </LoadMore>
        )}
      </Container>
    </Wrap>
  );
}
