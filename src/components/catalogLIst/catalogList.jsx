import { CatalogItem } from "../catalogItem/catalogItem";

import { CatalogUl } from "./catalogList.styled";

export function CatalogList({ data }) {
  return (
    <>
      <CatalogUl>
        {data &&
          data?.map((info) => (
            <CatalogItem
              key={info.id}
              id={info.id}
              year={info.year}
              make={info.make}
              model={info.model}
              img={info.img}
              description={info.description}
              rentalPrice={info.rentalPrice}
              address={info.address}
              rentalCompany={info.rentalCompany}
              rentalConditions={info.rentalConditions}
              type={info.type}
              functionalities={info.functionalities}
              fuelConsumption={info.fuelConsumption}
              engineSize={info.engineSize}
              accessories={info.accessories}
              mileage={info.mileage}
            />
          ))}
      </CatalogUl>
    </>
  );
}
