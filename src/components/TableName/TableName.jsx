/* eslint-disable react/prop-types */
import React from "react";
import s from "./TableName.module.scss";

export const TableName = ({ children }) => {
  return (
    <table className={s.tableDiv}>
      <thead className={s.table__head}>
        <tr className={s.table__head}>
          <th>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Property 1=unchecked &#226;&#128;&#148; default">
                <path
                  id="Vector"
                  d="M14.2222 1.77778V14.2222H1.77778V1.77778H14.2222ZM14.2222 0H1.77778C0.8 0 0 0.8 0 1.77778V14.2222C0 15.2 0.8 16 1.77778 16H14.2222C15.2 16 16 15.2 16 14.2222V1.77778C16 0.8 15.2 0 14.2222 0Z"
                  fill="#ADBFDF"
                />
              </g>
            </svg>
          </th>
          <th>Тип</th>
          <th>Время</th>
          <th>Сотрудник</th>
          <th>Звонок</th>
          <th>Источник</th>
          <th>Оценка</th>
          <th>Длительность</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};
