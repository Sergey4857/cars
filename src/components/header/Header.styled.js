import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const HeaderStyled = styled.header`
  display: flex;
  background-color: #3470ff;
  gap: 20px;
  height: 8vh;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;
export const Wrap = styled.nav`
  display: flex;
  align-items: center;

  margin-left: auto;
  margin-right: auto;
`;
export const NavLinks = styled.nav`
  display: flex;
  gap: 20px;
  margin-left: 20px;
`;

export const NavLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #1a53ff;
  }
`;
