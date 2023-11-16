import {
  Box,
  Brand,
  Button,
  ButtonGroup,
  DropdownBtn,
  DropdownItem,
  DropdownList,
  FromDiv,
  Group,
  InputFrom,
  InputGroup,
  InputTo,
  InputWrap,
  LabelFrom,
  LabelTo,
  Price,
  SvgBrand,
  SvgPrice,
  Title,
  ToDiv,
  Wrap,
} from "./Filters.styled";
import sprite from "../../assets/imgs_sprite/sprite.svg";
import models from "./makes.json";
import price from "./price.json";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filterCars } from "../../redux/filterSlice";

import prices from "./price.json";

export default function Filters({
  setFilterClicked,
  setShowButton,
  setResetData,
}) {
  const initialState = {
    brand: "",
    price: "",
    from: "",
    to: "",
  };
  const dispatch = useDispatch();
  const [filterData, setFilterData] = useState(initialState);
  console.log(filterData);
  const [optionValueBrand, setOpitionValueBrand] = useState("");
  const [optionValuePrice, setOpitionValuePrice] = useState("");
  const [optionsBrandOpened, setOptionsBrandOpened] = useState(false);
  const [optionsPriceOpened, setOptionsPriceOpened] = useState(false);

  const recetClick = (e) => {
    // e.preventDefault();
    // setResetData(true);
    // if (JSON.stringify(filterData) === JSON.stringify(initialState)) {
    //   return;
    // }
    // setFilterClicked(true);
    // setShowButton(false);
    // dispatch(filterCars(initialState));
  };

  const handleClick = (e) => {
    e.preventDefault();
    // if (JSON.stringify(filterData) === JSON.stringify(initialState)) {
    //   return;
    // }
    setFilterClicked(true);
    setShowButton(false);
    dispatch(filterCars(filterData));
  };

  const handleOptionClick = (e, option) => {
    const name = e.target.attributes.name.value;
    if (name === "brand") {
      setOpitionValueBrand(option);
      const brand = { [name]: option };
      setFilterData((prevState) => ({
        ...prevState,
        ...brand,
      }));

      setOptionsBrandOpened(false);
    }
    if (name === "price") {
      setOpitionValuePrice(option);

      const price = { [name]: option };
      setFilterData((prevState) => ({
        ...prevState,
        ...price,
      }));
    }

    setOptionsPriceOpened(false);
  };

  const onChange = (e) => {
    const { name, value } = e.target;

    const inputData = {
      [name]: value,
    };

    setFilterData((prevState) => ({ ...prevState, ...inputData }));
  };

  // useEffect(() => {
  //   const clickOutside = (e) => {
  //     if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
  //       setOnShowDropdown(false);
  //     }
  //   };

  //   document.addEventListener("click", clickOutside);
  //   return () => {
  //     document.removeEventListener("click", clickOutside);
  //   };
  // }, []);

  return (
    <Wrap>
      <Group>
        <Brand>
          <Title>Car brand</Title>
          <DropdownBtn
            onClick={(e) => {
              console.log(e.target);
              console.log(e.currentTarget);
              setOptionsBrandOpened(!optionsBrandOpened);
              if (e.target !== e.currentTarget) {
                setOptionsBrandOpened(false);
              }
            }}
          >
            {optionValueBrand ? optionValueBrand : "All brands"}

            <SvgBrand isOpenBrand={optionsBrandOpened}>
              <use href={`${sprite}#icon-down`}></use>
            </SvgBrand>
          </DropdownBtn>
          {optionsBrandOpened && (
            <DropdownList>
              {models.map((option) => (
                <DropdownItem
                  key={option}
                  name="brand"
                  onClick={(e) => {
                    handleOptionClick(e, option);
                  }}
                >
                  {option}
                </DropdownItem>
              ))}
            </DropdownList>
          )}
        </Brand>

        <Price>
          <Title>Price/ 1 hour</Title>
          <DropdownBtn
            onClick={() => {
              setOptionsPriceOpened(!optionsPriceOpened);
            }}
          >
            {optionValuePrice ? optionValuePrice : "To $"}
            <SvgPrice isOpenPrice={optionsPriceOpened}>
              <use href={`${sprite}#icon-down`}></use>
            </SvgPrice>
          </DropdownBtn>
          {optionsPriceOpened && (
            <DropdownList>
              {price.map((option) => (
                <DropdownItem
                  key={option}
                  name="price"
                  onClick={(e) => {
                    handleOptionClick(e, option);
                  }}
                >
                  {option}
                </DropdownItem>
              ))}
            </DropdownList>
          )}
        </Price>
      </Group>

      <Box>
        <InputGroup>
          <Title>Сar mileage / km</Title>

          <InputWrap>
            <FromDiv>
              <LabelFrom className="label" htmlFor="from">
                From
              </LabelFrom>
              <InputFrom
                id="from"
                name="from"
                type="number"
                onChange={onChange}
              ></InputFrom>
            </FromDiv>

            <ToDiv>
              <LabelTo className="label" htmlFor="to">
                To
              </LabelTo>
              <InputTo
                id="to"
                type="number"
                name="to"
                onChange={onChange}
              ></InputTo>
            </ToDiv>
          </InputWrap>
        </InputGroup>
        <ButtonGroup>
          <Button type="submit" onClick={handleClick}>
            Search
          </Button>
          <Button type="submit" onClick={recetClick}>
            Recet
          </Button>
        </ButtonGroup>
      </Box>
    </Wrap>
  );
}
