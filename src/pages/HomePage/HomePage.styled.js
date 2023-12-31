import styled from "@emotion/styled";
import road from "../../assets/imgs_sprite/road.jpg";
import camaro from "../../assets/imgs_sprite/camaro.png";
import toyota from "../../assets/imgs_sprite/corolla.png";

export const Backround = styled.div`
  background-image: url(${road});
  background-size: cover;
  width: 100%;
  height: 92vh;
`;

export const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 700px;
`;

export const Wrapper = styled.div`
  max-width: 800px;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
`;

export const Welcome = styled.h1`
  font-size: 36px;
  color: #333;
  margin-bottom: 20px;
`;

export const Goal = styled.p`
  font-size: 20px;
  color: #666;
  margin-bottom: 30px;
`;

export const ContactInfo = styled.div`
  margin-top: 20px;
`;

export const ContactTitle = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
`;

export const ContactDetails = styled.p`
  font-size: 18px;
  color: #666;
  margin: 5px 0;
`;

export const CatalogLink = styled.a`
  display: inline-block;
  margin-top: 20px;
  padding: 15px 30px;
  font-size: 20px;
  color: #fff;
  background-color: #007bff;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ImageCar1 = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 260px;
  height: 200px;

  background-image: url(${toyota});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
export const ImageCar2 = styled.div`
  position: absolute;
  right: 10px;
  bottom: 0;
  width: 250px;
  height: 200px;

  background-image: url(${camaro});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
