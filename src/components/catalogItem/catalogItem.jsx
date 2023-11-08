import { useState } from "react";
import ModalWindow from "../modal/modal";
import {
  Button,
  ContentImage,
  ModelDesc,
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
          {model && <ModelDesc>{model},</ModelDesc>}{" "}
          <ModelText>{year}</ModelText>
          <ModelPrise>{rentalPrice}</ModelPrise>
        </ModelWrap>

        <ModelTags>
          {address} | {id} | {model} | {rentalCompany} |
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
