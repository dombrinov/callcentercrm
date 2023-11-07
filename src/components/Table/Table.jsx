/* eslint-disable react/prop-types */
import React from "react";
import s from "./Table.module.scss";
import { Arrows } from "../../ui/Arrows/Arrows";
import { Dots } from "../../ui/Dots/Dots";
import { Scores } from "../../ui/Scores/Scores";
import { InputCheckbox } from "../../ui/InputCheckbox/InputCheckbox";

export const Table = ({
  check,
  key,
  call,
  date,
  avatar,
  number,
  source,
  time,
}) => {
  function time_convert(num) {
    var min = Math.floor(num / 60);
    var sec = num % 60;
    if (String(sec).length < 2) {
      sec = "0" + sec;
    }
    return min + ":" + sec;
  }

  return (
    <tr key={key} className={s.table__rows}>
      <td className={s.table__check}>
        {" "}
        <InputCheckbox />
      </td>
      <td className={s.arrow}>
        {call === 1 ? (
          <Arrows variant={"incommingCall"} />
        ) : (
          <Arrows variant={"outgoingCall"} />
        )}
      </td>
      <td className={s.table__date}>{date.slice(11, 16)}</td>
      <td className={s.table__avatar}>
        <img className={s.table__avatar__img} src={avatar} alt="" />
      </td>
      <td className={s.table__number}>{"+" + number}</td>
      <td className={s.table__source}>
        {source === "" ? "Rabota.ru" : source}
      </td>
      <td className={s.table__point}>
        <Dots variant="Excellent" /> <Scores condition="Отлично" />{" "}
      </td>
      <td className={s.table__time}>{time_convert(time)}</td>
    </tr>
  );
};
