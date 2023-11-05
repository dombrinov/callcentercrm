/* eslint-disable react/prop-types */
import React from "react";
import s from "./Table.module.scss";
import { Arrows } from "../../ui/Arrows/Arrows";

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
      <td className={s.table__check}>{check}</td>
      <td className={s.arrow}>
        {call === 1 ? (
          <Arrows variant={"incommingCall"} />
        ) : (
          <Arrows variant={"outgoingCall"} />
        )}
      </td>
      <td className={s.table__date}>{date.slice(11, 16)}</td>
      <td>
        <img className={s.table__avatar} src={avatar} alt="" />
      </td>
      <td>{"+" + number}</td>
      <td>{source}</td>
      <td>ocenka</td>
      <td>{time_convert(time)}</td>
    </tr>
  );
};
