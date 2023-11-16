import styled from "@emotion/styled";

export const WindowDiv = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: calc((100% + 375px) / 2);
  height: 100%;

  background-color: #3470ff;
  z-index: 1000;
  &.modal-enter {
    opacity: 0;
    transform: translateX(100%);
  }

  &.modal-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: transform 300ms cubic-bezier(0.165, 0.84, 0.44, 1.03);
  }

  /* For unmounting */
  &.modal-exit {
    opacity: 1;
    transform: translateX(0);
  }

  &.modal-exit-active {
    opacity: 1;
    transform: translateX(100%);
    transition: transform 300ms cubic-bezier(0.165, 0.84, 0.44, 1.03);
  }
`;

export const WrapDiv = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  display: flex;
  gap: 8px;
  padding: 10px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.33;
`;
