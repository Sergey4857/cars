import axios from "axios";
export function HomePage() {
  const rentalConditions =
    "Minimum age: 25\nValid driver's license\nSecurity deposit required";
  console.log(rentalConditions.split("\n"));

  const BaseUrl = "https://654b817e5b38a59f28ef32f6.mockapi.io/";

  return (
    <>
      <p>Its homepage</p>
    </>
  );
}
