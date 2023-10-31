import React from "react";
import s from "./Score.module.scss";
import cn from "../../utils/cn/cn";

// eslint-disable-next-line react/prop-types
export const Scores = ({ condition }) => {
  return (
    <div
      className={cn(
      s.score__bad__wrapper,
        {
          [s.score__good__wrapper]: condition === "Хорошо",
          [s.score__perfect__wrapper]: condition === "Отлично",
          [s.score__bad__wrapper]: condition === "Плохо",
        },
        []
      )}
    >
      <span className={s.score}>{condition}</span>
    </div>
  );
};
