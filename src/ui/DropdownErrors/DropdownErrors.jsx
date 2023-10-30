import React from "react";
import s from "../Dropdown/Dropdown.module.scss";
export const DropdownErrors = () => {
  const errors = [
    "Приветствие",
    "Имя",
    "Цена",
    "Скидка",
    "Предзаказ",
    "Благодарность",
    "Стоп слова",
  ];
  return (
    <>
      {errors.map((el) => (
        <li key={el} className={s.item}>
          {el}
        </li>
      ))}
    </>
  );
};
