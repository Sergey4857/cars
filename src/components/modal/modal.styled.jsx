import styled from "@emotion/styled";

export const ModalBackdropDiv = styled.div`
  background: ${({ theme }) => theme.color.backdropBackground};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
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
  z-index: 99;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  background-color: ${({ theme }) => theme.color.modalBackground};

  border-radius: 12px;
  overflow-y: auto;

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

  /* For unmounting */
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
`;

export const CloseModalButton = styled.button`
  width: 22px;
  height: 22px;
  color: ${({ theme }) => theme.color.white};
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  position: absolute;
  top: 14px;
  right: 14px;
  padding: 0;
  transition: color ${({ theme }) => theme.transition.main};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.color.hover};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    top: 16px;
    right: 16px;
    width: 26px;
    height: 26px;
  }
`;

export const CloseModalIcon = styled.svg`
  width: 100%;
  height: 100%;
  stroke: currentColor;
`;

export const CarsModal = styled.div`
  padding: 40px;
  width: 541px;
  height: 752px;
  background: #fff;
  border-radius: 24px;
`;

export const ModalImage = styled.img`
  max-width: 461px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 14px;
  height: 249px;
  border-radius: 24px;
`;

export const ModalDesc = styled.p`
  color: #121417;
  font-size: 14px;
  line-height: calc(20 / 14);
  margin-top: 14px;
`;

export const ModalTitle = styled.h2`
  color: #121417;
  font-size: 14px;
  font-weight: 500;
  line-height: calc(20 / 14);
  margin-bottom: 8px;
  margin-top: 24px;
`;

export const Conditions = styled.p``;

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
`;

export const DecorSpan = styled.span`
  display: flex;
  width: 1px;
  height: 16px;
  margin-left: 6px;
  margin-right: 6px;
  background-color: rgba(18, 20, 23, 0.1);
`;
