import React from "react";
import s from "../Dropdown/Dropdown.module.scss";
import Bad from "./assets/Bad.svg";
import Good from "./assets/Good.svg";
import Excellent from "./assets/Excellent.svg";
import redDot from "./assets/redDot.svg";
import twoBlueDots from "./assets/twoBlueDots.svg";
import threeGreenDots from "./assets/threeGreenDots.svg";

export const DropdownScores = () => {
  const scores = [
    "распознать",
    "Скрипт не использован",
    Bad,
    Good,
    Excellent,
    redDot,
    twoBlueDots,
    threeGreenDots,
  ];
  return (
    <>
      {scores.map((el) => (
        <li key={el} className={s.item}>
          {el}
        </li>
      ))}
    </>
  );
};
