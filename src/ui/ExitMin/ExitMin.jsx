import React, { useState } from "react";
import s from "./ExitMin.module.scss";

export const ExitMin = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <button onClick={handleClick} className={s.ui__selector}>
        <span>
          <svg
            className={s.ui__selector__exit}
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Group">
              <path
                id="Vector"
                d="M9 4L7.6 5.4L10.2 8H0V10H10.2L7.6 12.6L9 14L14 9L9 4ZM18 16H10V18H18C19.1 18 20 17.1 20 16V2C20 0.9 19.1 0 18 0H10V2H18V16Z"
                fill="#002CFB"
              />
            </g>
          </svg>
        </span>
      </button>
    </>
  );
};
