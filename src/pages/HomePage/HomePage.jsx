export function HomePage() {
  const rentalConditions =
    "Minimum age: 25\nValid driver's license\nSecurity deposit required";
  console.log(rentalConditions.split("\n"));
  return (
    <>
      <p>Its homepage</p>
    </>
  );
}
