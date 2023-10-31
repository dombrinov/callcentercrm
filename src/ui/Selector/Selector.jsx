/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import s from "./Selector.module.scss";

export const Selector = ({ variant }) => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };
  if (variant === "questMax") {
    return (
      <button className={s.ui__selector} onClick={handleClick}>
        <span>
          <svg
            className={s.ui__selector__question__quest}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="help_black_24dp 1" clipPath="url(#clip0_60_3529)">
              <circle id="Ellipse" cx="12" cy="12" r="9" fill="#ADBFDF " />
              <path
                id="Vector"
                d="M11.9998 2C6.47976 2 1.99976 6.48 1.99976 12C1.99976 17.52 6.47976 22 11.9998 22C17.5198 22 21.9998 17.52 21.9998 12C21.9998 6.48 17.5198 2 11.9998 2ZM12.9998 19H10.9998V17H12.9998V19ZM15.0698 11.25L14.1698 12.17C13.4498 12.9 12.9998 13.5 12.9998 15H10.9998V14.5C10.9998 13.4 11.4498 12.4 12.1698 11.67L13.4098 10.41C13.7798 10.05 13.9998 9.55 13.9998 9C13.9998 7.9 13.0998 7 11.9998 7C10.8998 7 9.99976 7.9 9.99976 9H7.99976C7.99976 6.79 9.78976 5 11.9998 5C14.2098 5 15.9998 6.79 15.9998 9C15.9998 9.88 15.6398 10.68 15.0698 11.25Z"
                fill="#F1F4F9"
              />
            </g>
            <defs>
              <clipPath id="clip0_60_3529">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
      </button>
    );
  }
  if (variant === "quest") {
    return (
      <button className={s.ui__selector} onClick={handleClick}>
        <span>
          <svg
            className={s.ui__selector__question__quest}
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="help_black_24dp 1" clipPath="url(#clip0_60_3529)">
              <circle id="Ellipse" cx="12" cy="12" r="9" fill="#ADBFDF " />
              <path
                id="Vector"
                d="M11.9998 2C6.47976 2 1.99976 6.48 1.99976 12C1.99976 17.52 6.47976 22 11.9998 22C17.5198 22 21.9998 17.52 21.9998 12C21.9998 6.48 17.5198 2 11.9998 2ZM12.9998 19H10.9998V17H12.9998V19ZM15.0698 11.25L14.1698 12.17C13.4498 12.9 12.9998 13.5 12.9998 15H10.9998V14.5C10.9998 13.4 11.4498 12.4 12.1698 11.67L13.4098 10.41C13.7798 10.05 13.9998 9.55 13.9998 9C13.9998 7.9 13.0998 7 11.9998 7C10.8998 7 9.99976 7.9 9.99976 9H7.99976C7.99976 6.79 9.78976 5 11.9998 5C14.2098 5 15.9998 6.79 15.9998 9C15.9998 9.88 15.6398 10.68 15.0698 11.25Z"
                fill="#F1F4F9"
              />
            </g>
            <defs>
              <clipPath id="clip0_60_3529">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
      </button>
    );
  }
  if (variant === "arrowUp") {
    return (
      <button className={s.ui__selector} onClick={handleClick}>
        <span className={s.ui__selector__question}>
          <svg
            className={s.ui__selector__question__arrow}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="expand_less_24dp" clip-path="url(#clip0_60_3533)">
              <circle id="Ellipse" cx="12" cy="12" r="10" fill="#F1F4F9" />
              <path
                id="Vector"
                d="M12 8L6 14L7.41 15.41L12 10.83L16.59 15.41L18 14L12 8Z"
                fill="#ADBFDF"
              />
            </g>
            <defs>
              <clipPath id="clip0_60_3533">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
      </button>
    );
  }
  if (variant === "arrowDown") {
    return (
      <button className={s.ui__selector__question} onClick={handleClick}>
        <span>
          <svg
            className={s.ui__selector__question__quest}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="chevron-down-circle ">
              <circle id="Ellipse" cx="12" cy="12" r="8" fill="#ADBFDF" />
              <path
                id="Vector"
                d="M22 12C22 14.6522 20.9464 17.1957 19.0711 19.0711C17.1957 20.9464 14.6522 22 12 22C10.6868 22 9.38642 21.7413 8.17317 21.2388C6.95991 20.7362 5.85752 19.9997 4.92893 19.0711C3.05357 17.1957 2 14.6522 2 12C2 9.34784 3.05357 6.8043 4.92893 4.92893C6.8043 3.05357 9.34784 2 12 2C13.3132 2 14.6136 2.25866 15.8268 2.7612C17.0401 3.26375 18.1425 4.00035 19.0711 4.92893C19.9997 5.85752 20.7362 6.95991 21.2388 8.17317C21.7413 9.38642 22 10.6868 22 12ZM6 10L12 16L18 10L16.6 8.6L12 13.2L7.4 8.6L6 10Z"
                fill="#F1F4F9"
              />
            </g>
          </svg>
        </span>
      </button>
    );
  } 
  if (variant === "close") {
    return (
      <button className={s.ui__selector} onClick={handleClick}>
        <span>
          <svg
            className={s.ui__selector__question__arrow}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="close" clip-path="url(#clip0_60_3331)">
              <path
                id="Vector"
                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                fill="#ADBFDF"
              />
            </g>
            <defs>
              <clipPath id="clip0_60_3331">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
      </button>
    );
  }
    if (variant === "exit") {
      return (
        <button className={s.ui__selector} onClick={handleClick}>
          <span>
            <svg
              className={s.ui__selector__question__arrow}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="logout_black_24dp 1" clip-path="url(#clip0_60_3436)">
                <g id="Group">
                  <path
                    id="Vector"
                    d="M17 8L15.59 9.41L17.17 11H9V13H17.17L15.59 14.58L17 16L21 12L17 8ZM5 5H12V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H12V19H5V5Z"
                    fill="#ADBFDF"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_60_3436">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
        </button>
      );
    }
};
