/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import { DropdownItem } from "../DropdownItem/DropdownItem";
import s from "./Dropdown.module.scss";
import { DropdownCalls } from "../DropdownCalls/DropdownCalls";
import { DropdownErrors } from "../DropdownErrors/DropdownErrors";
import { DropdownScores } from "../DropdownScores/DropdownScores";
import { FilterButton } from "../FilterButton/FilterButton";

export const Dropdown = () => {
  const [isShowed, setIsShowed] = useState(true);

  const buttonHandler = () => {
    switch (isShowed) {
      case false:
        setIsShowed(true);
        break;
      case true:
        setIsShowed(false);
        break;
      default:
        setIsShowed(true);
        return isShowed;
    }
  };

  return (
    <>
      <div className={s.mainFlex}>
        <div className={s.flex}>
          <div className={s.menu}>
            <FilterButton
              text={"Все сотрудники"}
              buttonHandler={buttonHandler}
            />
            <ul className={isShowed ? s.list : s.hideList}>
              <li className={s.default}>Все сотрудники</li>
              <DropdownItem />
            </ul>
          </div>
          <div className={s.menu}>
            <FilterButton text={"Все звонки"} buttonHandler={buttonHandler} />
            <ul className={isShowed ? s.list : s.hideList}>
              <li className={s.default}>Все звонки</li>
              <DropdownCalls />
            </ul>
          </div>
          <div className={s.menu}>
            <FilterButton text={"Все ошибки"} buttonHandler={buttonHandler} />
            <ul className={isShowed ? s.list : s.hideList}>
              <li className={s.default}>Все ошибки</li>
              <DropdownErrors />
            </ul>
          </div>
          <div className={s.menu}>
            <FilterButton text={"Все оценки"} buttonHandler={buttonHandler} />
            <ul className={isShowed ? s.list : s.hideList}>
              <li className={s.default}>Все оценки</li>
              <DropdownScores />
            </ul>
          </div>
        </div>
        <div className={s.flex}>
          <FilterButton text={"Все  типы"} />
          <FilterButton text={"Сбросить фильтры"} />
          <FilterButton text={"Входящие"} />
          <FilterButton text={"Все источники"} />
        </div>
      </div>
    </>
  );
};
