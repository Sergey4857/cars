import styled from "@emotion/styled";

export const StyledItem = styled.li`
  display: flex;

  flex-direction: column;
  width: calc((100% - 87px) / 4);
  outline: 2px solid green;
`;

export const ContentImage = styled.img`
  width: 274px;
  height: 268px;
  border-radius: 14px;
  margin-bottom: 14px;
`;

export const ModelText = styled.span`
  color: #121417;
  font-size: 16px;
  font-weight: 500;
  line-height: calc(24 / 16);
`;

export const ModelPrise = styled.span`
  margin-left: auto;
  font-size: 16px;
  font-weight: 500;
  line-height: calc(24 / 16);
`;

export const ModelWrap = styled.div`
  display: flex;
  gap: 3px;
  margin-bottom: 8px;
`;
export const ModelDesc = styled.span`
  color: #3470ff;
  font-size: 16px;
  font-weight: 500;
  line-height: calc(24 / 16);
`;

export const Button = styled.button`
  display: flex;
  max-width: 274px;
  height: 44px;
  padding: 12px 99px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: #3470ff;

  font-size: 14px;
  font-weight: 600;
  line-height: calc(20 / 14);
  color: #fff;
`;

export const ModelTags = styled.span`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 28px;
`;
