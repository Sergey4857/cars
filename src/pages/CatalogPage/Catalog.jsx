import { useEffect, useState } from "react";

import axios from "axios";
import { Container } from "../../components/common/container/Container";
import { CatalogList } from "../../components/catalogLIst/catalogList";

const BaseUrl = "https://654b817e5b38a59f28ef32f6.mockapi.io/";

export default function Catalog() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`${BaseUrl}/advert`);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <Container>
      <CatalogList data={data} />
    </Container>
  );
}
