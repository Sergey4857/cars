import {
  Box,
  Brand,
  Button,
  ButtonGroup,
  FromDiv,
  Group,
  InputFrom,
  InputGroup,
  InputTo,
  InputWrap,
  LabelFrom,
  LabelTo,
  Price,
  Svg,
  Title,
  ToDiv,
  Wrap,
} from "./Filters.styled";
import sprite from "../../assets/imgs_sprite/sprite.svg";
import models from "./makes.json";
import Dropdown from "react-dropdown";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterCars } from "../../redux/filterSlice";
import prices from "./price.json";
import css from "./Dropdown.module.css";

export default function Filters({ setFilterClicked, setShowButton }) {
  const initialState = {
    brand: "",
    price: "",
    from: "",
    to: "",
  };
  const dispatch = useDispatch();
  const [filterData, setFilterData] = useState(initialState);

  const handleClick = (e) => {
    e.preventDefault();
    if (JSON.stringify(filterData) === JSON.stringify(initialState)) {
      return;
    }
    setFilterClicked(true);
    setShowButton(false);
    dispatch(filterCars(filterData));
  };

  const onBrandChange = (value) => {
    const input = { brand: value.value };
    setFilterData((prevState) => ({ ...prevState, ...input }));
  };
  const onPriceChange = (value) => {
    const input = { price: value.value };
    setFilterData((prevState) => ({ ...prevState, ...input }));
  };

  const onChange = (e) => {
    const { name, value } = e.target;

    const inputData = {
      [name]: value,
    };

    setFilterData((prevState) => ({ ...prevState, ...inputData }));
  };

  return (
    <Wrap>
      <Group>
        <Brand>
          <Title>Car brand</Title>
          <Dropdown
            value={filterData.brand}
            options={models}
            onChange={onBrandChange}
            placeholder="Enter "
            className={`${css.dropDown} ${css.dropDownMakes}`}
            controlClassName={css.dropDownCtrl}
            placeholderClassName={css.dropDownPlaceholderMakes}
            menuClassName={css.dropDownMenu}
            arrowClosed={
              <Svg className="arrow-closed">
                <use href={sprite + "#icon-down"}></use>
              </Svg>
            }
            arrowOpen={
              <Svg className="arrow-open">
                <use href={sprite + "#icon-up"}></use>
              </Svg>
            }
          ></Dropdown>
        </Brand>

        <Price>
          <Title>Price/ 1 hour</Title>
          <Dropdown
            value="To $"
            options={prices}
            onChange={onPriceChange}
            placeholder="To $"
            className={`${css.dropDown} ${css.dropDownPrices}`}
            controlClassName={`${css.dropDownCtrl} ${css.dropDownCtrlPrc}`}
            placeholderClassName={css.dropDownPlaceholderMakes}
            menuClassName={css.dropDownMenu}
            arrowClosed={
              <Svg className="arrow-closed">
                <use href={sprite + "#icon-down"}></use>
              </Svg>
            }
            arrowOpen={
              <Svg className="arrow-open">
                <use href={sprite + "#icon-up"}></use>
              </Svg>
            }
          ></Dropdown>
        </Price>
      </Group>

      <Box>
        <InputGroup>
          <Title>Сar mileage / km</Title>
          <InputWrap>
            <FromDiv>
              <LabelFrom htmlFor="from">From</LabelFrom>
              <InputFrom
                id="from"
                name="from"
                type="number"
                onChange={onChange}
              ></InputFrom>
            </FromDiv>

            <ToDiv>
              <LabelTo htmlFor="to">To</LabelTo>
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
          <Button type="submit" onClick={handleClick}>
            Recet
          </Button>
        </ButtonGroup>
      </Box>
    </Wrap>
  );
}
