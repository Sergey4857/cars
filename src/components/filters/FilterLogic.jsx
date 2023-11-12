export const filterCars = (car, filter) => {
  const isBrandMatch =
    !filter.brand || filter.brand === "All brands" || car.make === filter.brand;

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
