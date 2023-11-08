import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";

import {
  CloseModalButton,
  CloseModalIcon,
  ModalDiv,
  ModalBackdropDiv,
  CarsModal,
} from "./modal.styled";

export default function ModalWindow(props) {
  const { onShow = true, type, onClose, children, data } = props;
  const modalRoot = document.querySelector("#modal-root");

  const nodeModalRef = useRef(null);
  const backdropRef = useRef(null);

  useEffect(() => {
    if (!onShow) return;

    const bodyScroll = (disable) => {
      document.body.style.overflow = disable ? "hidden" : "auto";
    };

    if (onShow || modalRoot.children.length !== 0) {
      bodyScroll(true);
    }

    const onEscKeyPress = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onEscKeyPress);

    return () => {
      bodyScroll(false);
      window.removeEventListener("keydown", onEscKeyPress);
    };
  }, [modalRoot.children.length, onShow, onClose]);

  return createPortal(
    <>
      <CSSTransition
        in={onShow}
        nodeRef={backdropRef}
        timeout={400}
        classNames="backdrop-wrapper"
        unmountOnExit
      >
        <ModalBackdropDiv onClick={onClose} ref={backdropRef} />
      </CSSTransition>

      <CSSTransition
        in={onShow}
        nodeRef={nodeModalRef}
        timeout={400}
        classNames="modal-wrapper"
        unmountOnExit
      >
        <ModalDiv ref={nodeModalRef} type={type}>
          <CloseModalButton onClick={onClose}>
            <CloseModalIcon width={26} height={26}></CloseModalIcon>
          </CloseModalButton>

          <CarsModal>
            <img src={data.img}></img>
            <p>{data.model}</p>
            <p>{data.rentalPrice}</p>
          </CarsModal>
        </ModalDiv>
      </CSSTransition>
    </>,
    modalRoot
  );
}
