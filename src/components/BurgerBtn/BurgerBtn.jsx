import PropTypes from "prop-types";

import Hamburger from "hamburger-react";
import { BurgerButton } from "./BurgerBtn.styled";

export default function BurgerBtn({ openedModal, setOpenedModal }) {
  return (
    <BurgerButton>
      <Hamburger
        color="#ffffff"
        toggled={openedModal}
        toggle={setOpenedModal}
      />
    </BurgerButton>
  );
}

BurgerBtn.propTypes = {
  setOpenedModal: PropTypes.func.isRequired,
};
