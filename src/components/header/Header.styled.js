import styled from "@emotion/styled";

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
  width: 339px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  gap: 5px;
  @media screen and (min-width: 320px) {
    gap: 5px;
  }
  @media screen and (min-width: 375px) {
    gap: 32px;
  }
  @media screen and (min-width: 768px) {
    width: 732px;
    justify-content: space-between;
  }
`;

export const RentButton = styled.a`
  background-color: #28a745;
  color: #ffffff;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  padding: 6px 12px;
  border-radius: 5px;
  cursor: pointer;
  z-index: 9999;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #218838;
  }

  @media screen and (min-width: 1440px) {
    padding: 10px 20px;
  }
`;
