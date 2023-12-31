import styled from "@emotion/styled";
export const Wrap = styled.div`
  display: flex;
  gap: 18px;
  max-width: 859px;
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;
export const Box = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 18px;
  }
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.color.grayThird};

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
  background: ${({ theme }) => theme.color.whiteFirst};
  border: transparent;
`;
export const Option = styled.option``;

export const Group = styled.div`
  display: flex;
  gap: 8px;

  @media screen and (min-width: 768px) {
    justify-content: space-between;
    flex-direction: column;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 18px;
  }
`;
export const Brand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 50%;
  position: relative;
  @media screen and (min-width: 768px) {
    width: 200px;
  }
`;
export const Price = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
  @media screen and (min-width: 768px) {
    width: 125px;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  margin-bottom: 35px;
  gap: 8px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
  }
`;
export const InputWrap = styled.div`
  display: flex;
  /* align-items: center; */
`;

export const InputFrom = styled.input`
  display: flex;
  width: 100%;
  height: 48px;
  border-radius: 14px 0px 0px 14px;
  border-color: transparent;
  padding-left: 70px;

  background: ${({ theme }) => theme.color.whiteFirst};
  border-right: 2px solid #e1e1e4;
  transition: border 150ms ease-in-out;
  &:hover {
    border: 2px solid #3470ff;
    cursor: pointer;
  }

  @media screen and(min-width:768px) {
  }
`;
export const InputTo = styled.input`
  display: flex;
  width: 100%;
  height: 48px;
  padding-left: 45px;
  border-radius: 0px 14px 14px 0px;
  border-color: transparent;
  background: ${({ theme }) => theme.color.whiteFirst};
  border: 2px solid transparent;
  &::placeholder {
    color: ${({ theme }) => theme.color.black};
    font-size: 18px;
    font-weight: 500;
    line-height: calc(20 / 18);
  }
  transition: border 150ms ease-in-out;
  &:hover {
    border: 2px solid #3470ff;
    cursor: pointer;
  }

  @media screen and(min-width:1440px) {
  }
`;

export const LabelFrom = styled.label`
  position: absolute;
  top: 13px;
  left: 20px;
  color: ${({ theme }) => theme.color.black};
  font-size: 18px;
  font-weight: 500;
  line-height: calc(20 / 18);
  @media screen and(min-width:1440px) {
    left: 24px;
  }
`;
export const FromDiv = styled.div`
  width: 170px;
  position: relative;
  &:hover .label {
    color: #3470ff;
  }
`;
export const ToDiv = styled.div`
  width: 170px;
  position: relative;
  transition: color 150ms ease-in-out;
  &:hover .label {
    color: #3470ff;
  }
`;

export const LabelTo = styled.label`
  position: absolute;
  top: 13px;
  left: 20px;
  color: ${({ theme }) => theme.color.black};
  font-size: 18px;
  font-weight: 500;
  line-height: calc(20 / 18);
`;

export const Button = styled.button`
  width: 158px;
  height: 48px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: ${({ theme }) => theme.color.blue};
  color: ${({ theme }) => theme.color.fullWhite};
  transition: background-color 150ms ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.color.hover};
  }
`;

export const SvgPrice = styled.svg`
  width: 20px;
  height: 20px;
  transition:
    stroke 150ms ease-in-out,
    rotate 150ms ease-in-out;
  rotate: ${({ isOpenPrice }) => (isOpenPrice ? "180deg" : "0deg")};
`;
export const SvgBrand = styled.svg`
  width: 20px;
  height: 20px;
  transition:
    stroke 150ms ease-in-out,
    rotate 150ms ease-in-out;
  rotate: ${({ isOpenBrand }) => (isOpenBrand ? "180deg" : "0deg")};
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  margin-top: auto;
`;

export const DropdownBtn = styled.button`
  display: flex;
  margin-top: auto;
  background-color: grey;
  height: 50px;
  border-radius: 14px;
  background: #f7f7fb;
  padding-top: 14px;
  padding-left: 18px;
  padding-right: 18px;
  justify-content: space-between;
  border: 2px solid transparent;
  transition:
    color 150ms ease-in-out,
    border 150ms ease-in-out,
    fill 150ms ease-in-out;

  &:hover {
    border: 2px solid #3470ff;
    color: #3470ff;
    fill: #3470ff;
  }
`;
export const DropdownList = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 9999;
  width: 100%;
  top: 80px;
  left: 0;
  padding: 14px 8px 14px 18px;
  gap: 8px;
  max-height: 272px;
  overflow: auto;
  border-radius: 14px;
  border: 2px solid rgba(18, 20, 23, 0.05);
  background: #fff;
  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
  color: rgba(18, 20, 23, 0.2);
  font-size: 16px;
  font-weight: 500;
  line-height: calc(20 / 16);

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(18, 20, 23, 0.05);

    border-radius: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;
export const DropdownItem = styled.li`
  transition: color 150ms ease-in-out;

  &:hover {
    color: #3470ff;
    cursor: pointer;
  }
`;
