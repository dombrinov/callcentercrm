import React, { useState } from "react";
import s from "./InputCheckbox.module.scss";

export const InputCheckbox = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <button
      className={
        isActive ? s.ui__checkbox__wrapper__checked : s.ui__checkbox__wrapper
      }
      onClick={handleClick}
    ></button>
  );
};
