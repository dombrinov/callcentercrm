import React, { useState } from 'react'
import { IconsItems } from '../IconsItems/IconsItems';
import img from "../Directoria/assets/img.svg"
import { Directoria } from '../Directoria/Directoria';

export const DirectoriaDropButton = () => {

    const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <div>
       <div onClick={handleClick}>
        <img src={img} alt="" />
        <IconsItems variant={isActive ? "ExpandDown" : "ExpandUp"} />
    </div>
     {isActive? <Directoria/> : ""} 
    </div>
  )
}
