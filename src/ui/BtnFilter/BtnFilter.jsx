/* eslint-disable react/prop-types */
import { IconsItems } from "../IconsItems/IconsItems";
import s from "./BtnFilter.module.scss";

export const BtnFilter = ({ text, buttonHandler }) => {
  console.log(text);
  return (
    <button className={s.dropdownButton} onClick={buttonHandler}>
      {text}
      <IconsItems variant={"SmallExpandDown"} />
    </button>
  );
};
