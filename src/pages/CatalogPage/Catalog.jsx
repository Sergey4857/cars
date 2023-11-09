import { useEffect, useState } from "react";

import axios from "axios";
import { Container } from "../../components/common/container/Container";
import { CatalogList } from "../../components/catalogLIst/catalogList";
import { LoadMore } from "./Catalog.styled";
const BaseUrl = "https://654b817e5b38a59f28ef32f6.mockapi.io/";

export default function Catalog() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(12);
  const [isLoading, setIsLoading] = useState(false);
  const [showButton, setShowButton] = useState(true);

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
    <Container>
      <CatalogList data={data} />
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
  );
}
