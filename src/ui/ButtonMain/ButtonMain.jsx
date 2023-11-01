import React from "react";
import s from "./ButtonMain.module.scss";
import cn from "../../utils/cn/cn";
// eslint-disable-next-line react/prop-types
export const ButtonMain = ({ children, buttonText }) => {
  if (buttonText === "add__200px") {
    return (
      <button className={s.button__add__200px}>
        {children}
        <svg
          className={s.button__img__add}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Vector"
            d="M12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 12 0ZM18 13.2H13.2V18H10.8V13.2H6V10.8H10.8V6H13.2V10.8H18V13.2Z"
            fill="#D8E4FB"
            fillOpacity="0.56"
          />
        </svg>
      </button>
    );
  }
  if (buttonText === "pay__200px") {
    return (
      <button className={s.button__pay__200px}>
        {children}
        <svg
          className={s.button__img__pay}
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="alert_24" clipPath="url(#clip0_60_3287)">
            <path
              id="Vector"
              d="M15 2.5C8.1 2.5 2.5 8.1 2.5 15C2.5 21.9 8.1 27.5 15 27.5C21.9 27.5 27.5 21.9 27.5 15C27.5 8.1 21.9 2.5 15 2.5ZM16.25 21.25H13.75V18.75H16.25V21.25ZM16.25 16.25H13.75V8.75H16.25V16.25Z"
              fill="#D8E4FB"
              fillOpacity="0.56"
            />
          </g>
          <defs>
            <clipPath id="clip0_60_3287">
              <rect width="30" height="30" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
    );
  }
  return (
    <button
      className={cn(
        s.score__bad__wrapper,
        {
          [s.button__plug__200px__blue]: buttonText === "plug__200px__blue",
          [s.button__plug__92px__transp]: buttonText === "plug__92px__transp",
          [s.button__plug__80px__transp]: buttonText === "plug__80px__transp",
          [s.button__recognize__122px__blue]:
            buttonText === "recognize__122px__blue",
          [s.button__recognize__122px__white]:
            buttonText === "recognize__122px__white",
          [s.button__details__200px__white]:
            buttonText === "details__200px__white",
        },
        [],
      )}
    >
      {children}
    </button>
  );
};
