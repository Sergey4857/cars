import { createPortal } from "react-dom";
import PropTypes from "prop-types";

import { WindowDiv } from "./BurgerMenu.styled";

import { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import Navigation from "../Navigation/Navigation";

export default function BurgerMenu({ setOpenedModal, openedModal }) {
  const burgerRoot = document.querySelector("#burger-root");
  const nodeModalRef = useRef(null);
  return createPortal(
    <CSSTransition
      in={openedModal}
      nodeRef={nodeModalRef}
      timeout={400}
      classNames="modal"
      unmountOnExit
    >
      <WindowDiv ref={nodeModalRef}>
        <Navigation
          onClick={() => {
            setOpenedModal(false);
          }}
          border={"true"}
        />
      </WindowDiv>
    </CSSTransition>,
    burgerRoot
  );
}

BurgerMenu.propTypes = {
  setOpenedModal: PropTypes.func.isRequired,
};
