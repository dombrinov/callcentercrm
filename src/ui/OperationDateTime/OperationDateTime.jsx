import React from "react";
import s from "./OperationDateTime.module.scss";
export const OperationDateTime = () => {
  return (
    <div className={s.ui__operation__Date__wrapper}>
      <div className={s.ui__operation__Date}>Дата и время операции</div>
      <span className={s.ui__operation__Date__arrow}></span>
    </div>
  );
};
