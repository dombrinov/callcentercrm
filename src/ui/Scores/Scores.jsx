import React from "react";
import s from "./Score.module.scss";

export const Scores = () => {
  return (
    <div className={s.score__bad__wrapper}>
      <span className={s.score__bad}>Плохо</span>
    </div>
  );
};
