/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { IconsItems } from "../IconsItems/IconsItems";
import s from "./BtnFilter.module.scss";

export const BtnFilter = ({ text, buttonHandler }) => {
  const [filter, setFilter] = useState("Сбросить фильтры");
  useEffect(() => {
    setFilter(text);
  }, []);
  return (
    <button className={s.dropdownButton} onClick={buttonHandler}>
      {filter}
      <IconsItems variant={"SmallExpandDown"} />
    </button>
  );
};
