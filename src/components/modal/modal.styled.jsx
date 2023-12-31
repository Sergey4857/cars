import styled from "@emotion/styled";

export const ModalBackdropDiv = styled.div`
  background-color: rgba(18, 20, 23, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 990000000000000;
  width: 100%;
  height: 100%;

  &.backdrop-wrapper-enter {
    opacity: 0;
  }

  &.backdrop-wrapper-enter-active {
    opacity: 1;
    transition: opacity 200ms ease-in-out;
  }

  /* For unmounting */
  &.backdrop-wrapper-exit {
    opacity: 1;
  }

  &.backdrop-wrapper-exit-active {
    opacity: 0;
    transition: opacity 200ms ease-in-out 200ms;
  }
`;

export const ModalDiv = styled.div`
  position: fixed;
  z-index: 9900000000000;
  top: 50%;
  left: 50%;
  translate: -50% -50%;

  border-radius: 12px;
  scrollbar-width: thin;
  scrollbar-color: #888 transparent;
  max-height: 90vh;
  overflow: auto;
  &.modal-wrapper-enter {
    opacity: 0;
    scale: 0.5;
  }

  &.modal-wrapper-enter-active {
    opacity: 1;
    scale: 1;
    transition:
      opacity 200ms ease-in-out 200ms,
      scale 200ms ease-in-out 200ms;
  }

  &.modal-wrapper-exit {
    opacity: 1;
    scale: 1;
  }

  &.modal-wrapper-exit-active {
    opacity: 0;
    scale: 0.5;

    transition:
      opacity 200ms ease-in-out,
      scale 200ms ease-in-out;
  }
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

export const CloseModalButton = styled.button`
  max-width: 22px;
  height: 22px;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 0;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.color.hover};
  }
`;

export const CloseModalIcon = styled.svg`
  width: 100%;
  height: 100%;
  stroke: currentColor;
`;

export const CarsModal = styled.div`
  padding: 40px;
  width: 300px;
  min-height: 752px;
  background: #fff;
  border-radius: 24px;
  @media screen and (min-width: 375px) {
    width: 350px;
  }
  @media screen and (min-width: 768px) {
    width: 541px;
  }
`;

export const ModalImage = styled.img`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 14px;
  height: 249px;
  border-radius: 24px;
`;
export const ModelWrapper = styled.div`
  display: flex;
  max-width: 277px;
`;

export const Wrapper = styled.div`
  display: flex;
  max-width: 277px;
  gap: 8px;
`;

export const ModelBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const ModelContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
export const ModalDesc = styled.p`
  color: #121417;
  font-size: 14px;
  line-height: calc(20 / 14);
  margin-top: 14px;
  display: block;
  width: 100%;
`;

export const ModalTitle = styled.h2`
  color: #121417;
  font-size: 14px;
  font-weight: 500;
  line-height: calc(20 / 14);
  margin-bottom: 8px;
  margin-top: 24px;
`;

export const StyledLink = styled.a`
  display: inline-flex;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  color: #fff;

  font-size: 14px;
  font-weight: 600;
  line-height: calc(20 / 14);
  margin-top: 24px;
  transition: background-color 200ms ease-in-out;
  color: #fff;
  &:hover {
    background-color: #0b44cd;
  }
`;

export const DecorSpan = styled.span`
  display: flex;
  width: 1px;
  height: 16px;
  margin-left: 6px;
  margin-right: 6px;
  background-color: rgba(18, 20, 23, 0.1);
`;

export const Conditions = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const ConditionTag = styled.div`
  display: flex;
  padding: 7px 14px;
  justify-content: center;
  align-items: center;

  border-radius: 35px;
  background: #f9f9f9;

  color: #363535;
  font-family: Montserrat;
  font-weight: 400;
  font-size: 12px;

  line-height: 1.5;
  letter-spacing: -0.24px;
`;
export const ConditionSpan = styled.span`
  color: #3470ff;
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: -0.24px;
  margin-left: 3px;
`;
export const FontStyled = styled.div`
  font-family: Montserrat;
`;
