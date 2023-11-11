import {
  Button,
  Group,
  InputFrom,
  InputGroup,
  InputTo,
  Svg,
  Title,
  Wrap,
} from "./Filters.styled";
import sprite from "../../assets/imgs_sprite/sprite.svg";
import models from "./makes.json";
import Dropdown from "react-dropdown";
import { useState } from "react";
import { SvgHeart } from "../catalogItem/catalogItem.styled";
import { useDispatch } from "react-redux";
import { filterCars } from "../../redux/filterSlice";
import prices from "./price.json";
import css from "./Dropdown.module.css";

export default function Filters() {
  const initialState = {
    brand: "",
    price: "",
    from: "",
    to: "",
  };
  const dispatch = useDispatch();
  const defaultModel = "enter the text";
  const [filterData, setFilterData] = useState(initialState);

  const handleClick = (e) => {
    e.preventDefault();
    if (JSON.stringify(filterData) === JSON.stringify(initialState)) {
      return;
    }
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
        <Title>Car brand</Title>
        <Dropdown
          value={filterData.brand}
          options={models}
          onChange={onBrandChange}
          placeholder="Enter the text"
          className={`${css.dropDown} ${css.dropDownMakes}`}
          controlClassName={css.dropDownCtrl}
          placeholderClassName={css.dropDownPlaceholderMakes}
          menuClassName={css.dropDownMenu}
          arrowClosed={
            <Svg>
              <use href={sprite + "#icon-down"}></use>
            </Svg>
          }
          arrowOpen={
            <Svg>
              <use href={sprite + "#icon-up"}></use>
            </Svg>
          }
        ></Dropdown>
      </Group>

      <Group>
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
            <Svg>
              <use href={sprite + "#icon-down"}></use>
            </Svg>
          }
          arrowOpen={
            <Svg>
              <use href={sprite + "#icon-up"}></use>
            </Svg>
          }
        ></Dropdown>
      </Group>

      <Group>
        <Title>Сar mileage / km</Title>
        <InputGroup>
          <InputFrom
            name="from"
            onChange={onChange}
            placeholder="From"
          ></InputFrom>

          <InputTo name="to" onChange={onChange} placeholder="To"></InputTo>
        </InputGroup>
      </Group>

      <Button type="submit" onClick={handleClick}>
        Search
      </Button>
    </Wrap>
  );
}
