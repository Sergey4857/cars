import styled from "@emotion/styled";

export const StyledItem = styled.li`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 426px;

  @media screen and (min-width: 768px) {
    width: calc((100% - 30px) / 2);
  }

  @media screen and (min-width: 1440px) {
    width: calc((100% - 87px) / 4);
  }
`;

export const ContentImage = styled.img`
  width: 100%;
  height: 268px;
  border-radius: 14px;
  margin-bottom: 14px;
`;

export const ModelText = styled.span`
  color: ${({ theme }) => theme.color.black};
  font-size: 16px;
  font-weight: 500;
  line-height: calc(24 / 16);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ModelPrise = styled.span`
  margin-left: auto;
  font-size: 16px;
  font-weight: 500;
  line-height: calc(24 / 16);
`;
export const ModelYear = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: calc(24 / 16);
`;

export const ModelWrap = styled.div`
  display: flex;
  gap: 3px;
  margin-bottom: 8px;
`;
export const ModelNumb = styled.span`
  color: ${({ theme }) => theme.color.blue};
  font-size: 16px;
  font-weight: 500;
  line-height: calc(24 / 16);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Button = styled.button`
  display: flex;
  width: 100%;
  height: 44px;
  padding: 12px 99px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.color.blue};
  margin-top: auto;

  font-size: 14px;
  font-weight: 600;
  line-height: calc(20 / 14);
  transition: background-color 200ms ease-in-out;
  color: ${({ theme }) => theme.color.fullWhite};
  &:hover {
    background-color: ${({ theme }) => theme.color.hover};
  }
`;

export const ModelTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: calc(18 / 12);
`;
export const ModelTag = styled.div`
  max-width: 130px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const FavoriteButton = styled.button`
  width: 18px;
  height: 18px;
  display: block;
  background-color: transparent;
  position: absolute;
  top: 18px;
  right: 18px;
`;

export const SvgHeart = styled.svg`
  width: 18px;
  height: 18px;
`;
