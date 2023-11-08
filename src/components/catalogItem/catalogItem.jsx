import {
  ContentImage,
  ModelPrise,
  ModelText,
  ModelWrap,
  StyledItem,
} from "./catalogItem.styled";

export function CatalogItem({
  id,
  year,
  make,
  model,
  img,
  description,
  rentalPrice,
  address,
  rentalCompany,
}) {
  return (
    <StyledItem>
      <ContentImage src={img}></ContentImage>
      <ModelWrap>
        <ModelText>{make}</ModelText>
        <ModelText>{model},</ModelText>
        <ModelText>{year}</ModelText>
        <ModelPrise>{rentalPrice}</ModelPrise>
      </ModelWrap>
    </StyledItem>
  );
}
