import { useState } from "react";
import ModalWindow from "../modal/modal";
import { DecorSpan } from "../modal/modal.styled";
import {
  Button,
  ContentImage,
  ModelNumb,
  ModelPrise,
  ModelTags,
  ModelText,
  ModelWrap,
  StyledItem,
} from "./catalogItem.styled";

export function CatalogItem(props) {
  const {
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
  } = props;
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => {
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <>
      <StyledItem>
        <ContentImage src={img}></ContentImage>
        <ModelWrap>
          <ModelText>{make}</ModelText>
          {model && <ModelNumb>{model},</ModelNumb>}{" "}
          <ModelText>{year}</ModelText>
          <ModelPrise>{rentalPrice}</ModelPrise>
        </ModelWrap>

        <ModelTags>
          {address?.split(",")[1]}
          <DecorSpan />
          {address?.split(",")[2]}
          <DecorSpan />
          {rentalCompany}
          <DecorSpan />
          Premium {type.charAt(0).toUpperCase() + type.slice(1).toLowerCase()}
          <DecorSpan />
          {model}
          <DecorSpan />
          {id}
        </ModelTags>

        <Button onClick={handleOpen}>Learn more</Button>
      </StyledItem>

      <ModalWindow
        data={props}
        onShow={openModal}
        onClose={handleClose}
      ></ModalWindow>
    </>
  );
}
