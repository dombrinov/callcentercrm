/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import { Avatar } from "../Avatar/Avatar";
import s from "./Dropdown.module.scss";
import { IconsItems } from "../IconsItems/IconsItems";

export const Dropdown = ({ variant }) => {
  const [isShowed, setIsShowed] = useState(true);
  const [employeeName, setEmployeeName] = useState("Anna");

  useEffect(() => {
    setEmployeeName("John");
  }, []);
  const buttonHandler = (isShowed) => setIsShowed(!isShowed);

  switch (variant) {
    case "Все сотрудники":
      return (
        <div>
          <div
            className={s.dropdownButton}
            onClick={() => buttonHandler(isShowed)}
          >
            Все сотрудники
            <IconsItems variant={"ExpandDown"} />
          </div>
          <div className={isShowed ? s.dropdownlist : s.unvisible}>
            <div className={s.dropdownTitle}>Все сотрудники</div>
            <div className={s.dropdownItem}>
              <Avatar src={"https://lk.skilla.ru/img/noavatar.jpg"} />
              <div>{employeeName}</div>
            </div>
            <div className={s.dropdownItem}>
              <Avatar src={"https://lk.skilla.ru/img/noavatar.jpg"} />
              <div>{employeeName}</div>
            </div>
          </div>
        </div>
      );
    case "Все звонки":
      return (
        <div>
          <div
            className={s.dropdownButton}
            onClick={() => buttonHandler(isShowed)}
          >
            Все звонки
            <IconsItems variant={"ExpandDown"} />
          </div>
          <div className={isShowed ? s.dropdownlist : s.unvisible}>
            <div className={s.dropdownTitle}>Все звонки</div>
            <div className={s.dropdownItem}>
              Все клиенты
              <div>
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4" cy="4" r="4" fill="#FFD500" />
                </svg>
              </div>
            </div>
            <div className={s.dropdownItem}>
              Новые клиенты
              <div>
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4" cy="4" r="4" fill="#FFD500" />
                </svg>
              </div>
            </div>
            <div className={s.dropdownItem}>
              Все исполнители
              <div>
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4" cy="4" r="4" fill="#FFD500" />
                </svg>
              </div>
            </div>
            <div className={s.dropdownItem}>
              Через приложение
              <div>
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4" cy="4" r="4" fill="#FFD500" />
                </svg>
              </div>
            </div>
            <div className={s.dropdownItem}>
              Прочие звонки
              <div>
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4" cy="4" r="4" fill="#FFD500" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      );
    case "Все ошибки":
      return (
        <div>
          <div
            className={s.dropdownButton}
            onClick={() => buttonHandler(isShowed)}
          >
            Все ошибки
            <IconsItems variant={"ExpandDown"} />
          </div>
          <div className={isShowed ? s.dropdownlist : s.unvisible}>
            <div className={s.dropdownTitle}>Все ошибки</div>
            <div className={s.dropdownItem}>Приветствие</div>
            <div className={s.dropdownItem}>Имя</div>
            <div className={s.dropdownItem}>Цена</div>
            <div className={s.dropdownItem}>Скидка</div>
            <div className={s.dropdownItem}>Предзаказ</div>
            <div className={s.dropdownItem}>Благодарность</div>
            <div className={s.dropdownItem}>Стоп слова</div>
          </div>
        </div>
      );
  }
};
