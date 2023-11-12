import styled from "@emotion/styled";
import favorites from "../../assets/imgs_sprite/favorites.jpg";

export const Title = styled.h1`
  padding-top: 50px;
  text-align: center;
  margin-bottom: 50px;
  font-weight: 500;
  font-size: 24px;
`;
export const CarName = styled.p``;

export const CarUl = styled.ul`
  max-width: 820px;
  max-height: 500px;
  overflow-y: auto;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CarLi = styled.li`
  padding: 10px;
  display: flex;
  align-items: center;
  background-color: #f7f7fb;
  border: 2px solid rgba(18, 20, 23, 0.1);
  border-radius: 24px;
`;
export const CarBtnDel = styled.button`
  display: flex;
  width: 25px;
  height: 44px;
  padding: 12px 99px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 12px;
  background: #3470ff;
  margin-left: auto;
  color: #fff;
  transition: background-color 200ms ease-in-out;
  color: #fff;
  &:hover {
    background-color: #0b44cd;
  }
`;

export const CarImage = styled.img`
  width: 100px;
  height: 60px;
  border-radius: 15px;
  margin-left: auto;
`;

export const Backround = styled.div`
  background-image: url(${favorites});
  background-size: cover;
  width: 100%;
  height: 92vh;
`;
