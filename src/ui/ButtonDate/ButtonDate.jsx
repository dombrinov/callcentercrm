/* eslint-disable react/no-unknown-property */
import React from "react";
import s from "./ButtonDate.module.scss";
import { ReactComponent as ArrowLeft } from "./assets/keyboard_arrow_left.svg";
import { ReactComponent as ArrowRight } from "./assets/keyboard_arrow_right.svg";
import { ReactComponent as Calendar } from "./assets/calendar.svg";
export const ButtonDate = () => {
  return (
    <>
      <div className={s.calendarFlex}>
        <ArrowLeft className={s.svgArrow} />
        <div className={s.threeDays}>
          <Calendar className={s.calendarIcon} />3 дня
        </div>
        <ArrowRight className={s.svgArrow} />
      </div>
    </>
  );
};
