import React from "react";
import circle from "./assets/yellowCircle.svg";
import s from "../Dropdown/Dropdown.module.scss";

export const DropdownCalls = () => {
  const calls = [
    {
      type: "Все клиенты",
      changes: true,
    },
    {
      type: "Новые клиенты",
      changes: true,
    },
    {
      type: "Все исполнители",
      changes: false,
    },
    {
      type: "Через приложение",
      changes: true,
    },
    {
      type: "Прочие звонки",
      changes: false,
    },
  ];
  return (
    <>
      {calls.map((el) => (
        <li key={el.type} className={s.item}>
          {el.type}
          <img src={el.changes === true ? circle : null} alt="" />
        </li>
      ))}
    </>
  );
};
