import React from "react";
import s from "./Loading.module.scss"

export const Loading = () => {
  return (
    <div className={s.ui__loading__wrapper}>
      <span className={s.ui__loading}></span>
      <p>Загружаем</p>
      
    </div>
  );
};
