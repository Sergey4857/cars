import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";
import {
  ModelNumb,
  ModelPrise,
  ModelTags,
  ModelText,
  ModelWrap,
} from "../catalogItem/catalogItem.styled";
import sprite from "../../assets/imgs_sprite/sprite.svg";
import defaultPicture from "../../assets/imgs_sprite/no_img_300x225.jpg";

import {
  CloseModalButton,
  CloseModalIcon,
  ModalDiv,
  ModalBackdropDiv,
  CarsModal,
  ModalImage,
  ModalDesc,
  ModalTitle,
  Conditions,
  StyledLink,
  DecorSpan,
  ModelWrapper,
  ModelBox,
  ConditionTag,
  ConditionSpan,
  FontStyled,
} from "./modal.styled";

const number = "+380730000000";

export default function ModalWindow(props) {
  const { onShow = true, type, onClose, data } = props;
  const modalRoot = document.querySelector("#modal-root");

  const nodeModalRef = useRef(null);
  const backdropRef = useRef(null);

  useEffect(() => {
    if (!onShow) return;

    const bodyScroll = (disable) => {
      document.body.style.overflow = disable ? "hidden" : "auto";
    };

    if (onShow || modalRoot.children.length !== 0) {
      bodyScroll(true);
    }

    const onEscKeyPress = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onEscKeyPress);

    return () => {
      bodyScroll(false);
      window.removeEventListener("keydown", onEscKeyPress);
    };
  }, [modalRoot.children.length, onShow, onClose]);
  console.log(data.rentalConditions?.split("\n")[0]);
  return createPortal(
    <>
      <CSSTransition
        in={onShow}
        nodeRef={backdropRef}
        timeout={400}
        classNames="backdrop-wrapper"
        unmountOnExit
      >
        <ModalBackdropDiv onClick={onClose} ref={backdropRef} />
      </CSSTransition>

      <CSSTransition
        in={onShow}
        nodeRef={nodeModalRef}
        timeout={400}
        classNames="modal-wrapper"
        unmountOnExit
      >
        <ModalDiv ref={nodeModalRef} type={type}>
          <CloseModalButton onClick={onClose}>
            <CloseModalIcon width={26} height={26}>
              <use href={`${sprite}#icon-x`}></use>
            </CloseModalIcon>
          </CloseModalButton>

          <CarsModal>
            <ModalImage
              src={data.img}
              onError={(e) => {
                e.target.src = defaultPicture;
              }}
            ></ModalImage>
            <ModelWrap>
              <ModelText>{data.make}</ModelText>
              {data.model && <ModelNumb>{data.model},</ModelNumb>}
              <ModelText>{data.year}</ModelText>
            </ModelWrap>

            <ModelTags>
              <ModelWrapper>
                {data.address?.split(",")[1]}
                <DecorSpan />
                {data.address?.split(",")[2]}
                <DecorSpan />
                Id: {data.id}
                <DecorSpan />
                Type:{" "}
                {data.type.charAt(0).toUpperCase() +
                  data.type.slice(1).toLowerCase()}
              </ModelWrapper>
              <ModelBox>
                Fuel Consumption: {data.fuelConsumption}
                <DecorSpan />
                Engine Size: {data.engineSize}
              </ModelBox>
            </ModelTags>
            <ModalDesc>{data.description}</ModalDesc>

            <ModalTitle>Accessories and functionalities:</ModalTitle>

            <ModelTags>
              {data?.accessories[0]}
              <DecorSpan />
              {data?.accessories[1]}
              <DecorSpan />
              {data?.accessories[2]}
              <DecorSpan />
              {data?.functionalities[0]}
              <DecorSpan />
              {data?.functionalities[1]}
              <DecorSpan />
              {data?.functionalities[2]}
            </ModelTags>

            <ModalTitle>Rental Conditions: </ModalTitle>

            <Conditions>
              <ModelWrapper>
                <ConditionTag>
                  <FontStyled>Minimum age:</FontStyled>
                  <ConditionSpan>
                    {data.rentalConditions?.split("\n")[0].match(/\d+/)
                      ? parseInt(
                          data.rentalConditions?.split("\n")[0].match(/\d+/)[0],
                          10
                        )
                      : null}
                  </ConditionSpan>
                </ConditionTag>
                <ConditionTag>
                  {data.rentalConditions?.split("\n")[1]}
                </ConditionTag>
              </ModelWrapper>
              <ModelBox>
                <ConditionTag>
                  {data.rentalConditions?.split("\n")[2]}
                </ConditionTag>
                <ConditionTag>
                  <FontStyled> Mileage:</FontStyled>
                  <ConditionSpan>
                    {(data.mileage / 1000).toFixed(3).replace(".", ",")}
                  </ConditionSpan>
                </ConditionTag>
                <ConditionTag>
                  <FontStyled>Price:</FontStyled>{" "}
                  <ConditionSpan>{data.rentalPrice}</ConditionSpan>
                </ConditionTag>
              </ModelBox>
            </Conditions>

            <StyledLink href={`tel:${number}`}>Rental car</StyledLink>
          </CarsModal>
        </ModalDiv>
      </CSSTransition>
    </>,
    modalRoot
  );
}
