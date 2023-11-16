import BurgerBtn from "../BurgerBtn/BurgerBtn";
import Logo from "../logo/Logo";
import Navigation from "../Navigation/Navigation";
import { HeaderStyled, Wrap, RentButton } from "./Header.styled";

import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { useEffect, useState } from "react";

export default function Header() {
  const [openedModal, setOpenedModal] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <HeaderStyled>
      <Wrap>
        <Logo />
        {isDesktop && <Navigation />}
        <RentButton href="tel:+380730000">Rent</RentButton>
        <BurgerBtn openedModal={openedModal} setOpenedModal={setOpenedModal} />
        {openedModal && (
          <BurgerMenu
            setOpenedModal={setOpenedModal}
            openedModal={openedModal}
          ></BurgerMenu>
        )}
      </Wrap>
    </HeaderStyled>
  );
}
