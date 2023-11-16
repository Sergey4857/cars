import styled from "@emotion/styled";

export const BurgerButton = styled.button`
  padding: 0;
  display: flex;
  position: absolute;
  top: 0;
  right: 0;

  z-index: 99999;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const BurgerSvg = styled.svg`
  width: 24px;
  height: 24px;
  stroke: #ffffff;
`;
