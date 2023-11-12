import { useEffect, useState } from "react";
import { Container } from "../../components/common/container/Container";
import { CatalogList } from "../../components/catalogLIst/catalogList";
import { LoadMore } from "./Catalog.styled";
import Filters from "../../components/filters/Filters";
import { useSelector } from "react-redux";
import { selectFilter } from "../../redux/Selectors";
import { Wrap } from "../Main/Main.styled";
import Spinner from "../../components/Spinner/Spinner";
import { fetch, fetchAll } from "../../api/fetchCars";
import { filterCars } from "../../components/filters/FilterLogic";

export function Catalog() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(12);
  const [isLoading, setIsLoading] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const [filterClicked, setFilterClicked] = useState(false);
  const filter = useSelector(selectFilter);

  const filterCar = (car) => {
    return filterCars(car, filter);
  };

  let filteredCars = data?.filter(filterCar);

  useEffect(() => {
    if (filteredCars?.length !== data?.length) {
      setShowButton(false);
    }
  }, [data?.length, filteredCars?.length]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(perPage, page);

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

  useEffect(() => {
    async function fetchAllData() {
      try {
        setIsLoading(true);

        const response = await fetchAll();
        setData(response.data);
        setFilterClicked(false);
        setShowButton(false);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    filterClicked && fetchAllData();
  }, [filterClicked]);

  return (
    <>
      <Wrap>
        <Container>
          <Filters
            setFilterClicked={setFilterClicked}
            setShowButton={setShowButton}
          />
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
      {isLoading && <Spinner />}
    </>
  );
}
