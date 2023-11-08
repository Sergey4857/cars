import { CatalogItem } from "../catalogItem/catalogItem";
import { CatalogUl } from "./catalogList.styled";

export function CatalogList({ data }) {
  return (
    <CatalogUl>
      {data &&
        data?.map(
          ({
            id,
            year,
            make,
            model,
            img,
            description,
            rentalPrice,
            address,
            rentalCompany,
          }) => (
            <CatalogItem
              key={id}
              id={id}
              year={year}
              make={make}
              model={model}
              img={img}
              description={description}
              rentalPrice={rentalPrice}
              address={address}
              rentalCompany={rentalCompany}
            />
          )
        )}
    </CatalogUl>
  );
}
