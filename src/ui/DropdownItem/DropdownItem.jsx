/* eslint-disable react/prop-types */
import s from "../Dropdown/Dropdown.module.scss";
export const DropdownItem = () => {
  const names = [
    {
      name: "Константин",
      photo: "https://lk.skilla.ru/img/noavatar.jpg",
    },
    {
      name: "Полина",
      photo: "https://lk.skilla.ru/img/noavatar.jpg",
    },
    {
      name: "Алекс",
      photo: "https://lk.skilla.ru/img/noavatar.jpg",
    },
  ];
  return (
    <>
      {names.map((el) => (
        <li key={el.name} className={s.item}>
          <img src={el.photo} alt="photo" />
          {el.name}
        </li>
      ))}
    </>
  );
};
