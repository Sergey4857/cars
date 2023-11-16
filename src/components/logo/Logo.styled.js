import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const LogoStyled = styled(Link)`
  display: flex;
  background-color: transparent;
  color: #ffffff;
  font-size: 23px;
  gap: 1px;
  height: 50px;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;
export const SvgLogo = styled.svg`
  padding-bottom: 4px;
`;
