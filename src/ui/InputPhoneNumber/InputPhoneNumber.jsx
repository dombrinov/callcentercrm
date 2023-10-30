import React, { useState } from "react";
import s from "./inputPhoneNumber.module.scss";
import { useRef } from "react";
import { IMaskInput } from "react-imask";

export const InputPhoneNumber = () => {
  const ref = useRef(null);
  const inputRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={
        isActive
          ? s.input__phone__number__wrapper
          : s.input__phone__number__wrapper__active
      }
    >
      <span className={s.input_luppa}></span>
      <IMaskInput
        mask="+{7}(000)000-00-00"
        value=""
        unmask={false} // true|false|'typed'
        ref={ref}
        inputRef={inputRef}
        onAccept={(value) => console.log(value)}
        placeholder="Поиск по звонкам"
        className={s.input__phone__number}
        onClick={handleClick}
      />
      <span
        className={isActive ? s.input__closer : s.input__closer__active}
        onClick={() => (ref.current.maskRef.value = "")}
      ></span>
    </div>
  );
};
