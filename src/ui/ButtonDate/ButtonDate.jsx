/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useState } from "react";
import s from "./ButtonDate.module.scss";

export const ButtonDate = ({ buttonHandler }) => {
  const [filterPeriod, setFilterPeriod] = useState("3 дня");

  const togglePeriodRight = (filterPeriod) => {
    switch (filterPeriod) {
      case "3 дня":
        setFilterPeriod("Неделя");
        break;
      case "Неделя":
        setFilterPeriod("Месяц");
        break;
      case "Месяц":
        setFilterPeriod("Год");
        break;
      case "Год":
        setFilterPeriod("3 дня");
        break;
      default:
        setFilterPeriod("3 дня");

        return filterPeriod;
    }
  };
  const togglePeriodLeft = (filterPeriod) => {
    switch (filterPeriod) {
      case "3 дня":
        setFilterPeriod("Год");
        break;
      case "Год":
        setFilterPeriod("Месяц");
        break;
      case "Месяц":
        setFilterPeriod("Неделя");
        break;
      case "Неделя":
        setFilterPeriod("3 дня");
        break;
      default:
        setFilterPeriod("3 дня");

        return filterPeriod;
    }
  };
  return (
    <>
      <div className={s.calendarFlex}>
        <div
          className={s.svgArrow}
          onClick={() => togglePeriodLeft(filterPeriod)}
        >
          <svg
            width="16"
            height="24"
            viewBox="0 0 16 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_60_3453)">
              <path
                d="M6.175 15.825L2.35833 12L6.175 8.175L5 7L0 12L5 17L6.175 15.825Z"
                fill="#ADBFDF"
              />
            </g>
            <defs>
              <clipPath id="clip0_60_3453">
                <rect width="16" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className={s.threeDays} onClick={buttonHandler}>
          <div>
            <svg
              width="16"
              height="18"
              viewBox="0 0 16 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.4 1.63636H13.6V0H12V1.63636H4V0H2.4V1.63636H1.6C0.72 1.63636 0 2.37273 0 3.27273V16.3636C0 17.2636 0.72 18 1.6 18H14.4C15.28 18 16 17.2636 16 16.3636V3.27273C16 2.37273 15.28 1.63636 14.4 1.63636ZM14.4 16.3636H1.6V5.72727H14.4V16.3636Z"
                fill="#ADBFDF"
              />
            </svg>
          </div>
          {filterPeriod}
        </div>
        <div
          className={s.svgArrow}
          onClick={() => togglePeriodRight(filterPeriod)}
        >
          <svg
            width="17"
            height="24"
            viewBox="0 0 17 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_60_3459)">
              <path
                d="M9.58984 15.825L13.4065 12L9.58984 8.175L10.7648 7L15.7648 12L10.7648 17L9.58984 15.825Z"
                fill="#ADBFDF"
              />
            </g>
            <defs>
              <clipPath id="clip0_60_3459">
                <rect width="17" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </>
  );
};
