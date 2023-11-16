import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const NavLinks = styled.nav`
  position: absolute;
  top: 0px;
  right: 220px;

  display: flex;
  flex-direction: column;
  padding-top: 80px;
  @media screen and (min-width: 375px) {
    right: 250px;
  }
  @media screen and (max-width: 768px) {
    gap: 10px;
  }
  @media screen and (min-width: 768px) {
    padding-top: 7px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    margin-left: 20px;
    margin-right: 20px;
    position: static;
  }
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
