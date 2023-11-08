/* eslint-disable react/prop-types */
import React, { useState } from "react";
import s from "./inputPhoneNumber.module.scss";
import { useRef } from "react";
import { IMaskInput } from "react-imask";

export const InputPhoneNumber = ({searcher, inputSearcher}) => {
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
          ? s.input__phone__number__wrapper__active
          : s.input__phone__number__wrapper
      }
      onClick={handleClick}
    >
      <span className={s.input_luppa}></span>
      <IMaskInput
        mask="+{7}(000)000-00-00"
        unmaskedValue={String(searcher)}
        unmask={true} // true|false|'typed'
        ref={ref}
        inputRef={inputRef}
        onAccept={(unmaskedValue) => console.log(unmaskedValue)}
        placeholder="Поиск по звонкам"
        className={s.input__phone__number}
        onChange={inputSearcher}
      />
      <span
        className={isActive ? s.input__closer__active : s.input__closer}
        onClick={() => (ref.current.maskRef.value = "")}
      ></span>
    </div>
  );
};
