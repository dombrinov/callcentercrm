import React from 'react'
import s from "./InputCheckbox.module.scss"
export const InputCheckbox = () => {
  return (
    <div>
      <input type="checkbox" className={s.ui__checkbox} name="checkbox" />
    </div>
  );
}
