import styled from "@emotion/styled";
export const Wrap = styled.div`
  display: flex;
  gap: 18px;
  max-width: 859px;
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
`;

export const Title = styled.p`
  color: #8a8a89;

  font-size: 14px;
  font-weight: 500;
  line-height: calc(18 / 14);
`;
export const Select = styled.select`
  display: flex;
  padding: 14px 160px 14px 18px;
  justify-content: center;
  align-items: center;
  gap: 32px;
  border-radius: 14px;
  background: #f7f7fb;
  border: transparent;
`;
export const Option = styled.option``;

export const Group = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
`;

export const InputGroup = styled.div`
  display: flex;
`;
export const InputFrom = styled.input`
  width: 160px;
  height: 48px;
  border-radius: 14px 0px 0px 14px;
  border-color: transparent;
  padding-left: 24px;

  background: #f7f7fb;
  border-right: 2px solid #e1e1e4;
  &::placeholder {
    color: #121417;
    font-size: 18px;
    font-weight: 500;
    line-height: calc(20 / 18);
  }
`;
export const InputTo = styled.input`
  width: 160px;
  height: 48px;
  padding-left: 24px;
  border-radius: 0px 14px 14px 0px;
  border-color: transparent;
  background: #f7f7fb;
  &::placeholder {
    color: #121417;
    font-size: 18px;
    font-weight: 500;
    line-height: calc(20 / 18);
  }
`;
export const Button = styled.button`
  padding: 14px 44px;
  margin-top: auto;
  height: 48px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  color: #fff;
  transition: background-color 200ms ease-in-out;
  &:hover {
    background-color: #0b44cd;
  }
`;

export const Svg = styled.svg`
  width: 20px;
  height: 20px;
`;
