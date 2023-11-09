import { CatalogItem } from "../catalogItem/catalogItem";
import { CatalogUl } from "./catalogList.styled";

export function CatalogList({ data }) {
  return (
    <>
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
              rentalConditions,
              type,
              functionalities,
              fuelConsumption,
              engineSize,
              accessories,
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
                rentalConditions={rentalConditions}
                type={type}
                functionalities={functionalities}
                fuelConsumption={fuelConsumption}
                engineSize={engineSize}
                accessories={accessories}
              />
            )
          )}
      </CatalogUl>
    </>
  );
}
