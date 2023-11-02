/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import React, { useEffect, useState } from "react";
import { Avatar } from "../Avatar/Avatar";
import s from "./Dropdown.module.scss";
import { Scores } from "../Scores/Scores";
import { Dots } from "../Dots/Dots";
import { ButtonDate } from "../ButtonDate/ButtonDate";
import { BtnFilter } from "../BtnFilter/BtnFilter";
import { useDispatch, useSelector } from "react-redux";
import {
  dropErrors,
  dropHandler,
  dropCalls,
  dropScores,
  dropPeriod,
  dropOrgs,
} from "../../reduxStore/filterSlice";

export const Dropdown = ({ variant }) => {
  // const [isShowed, setIsShowed] = useState(true);
  const [employeeName, setEmployeeName] = useState("Anna");
  const [orgs, setOrgs] = useState("ООО Грузчиков Сервис Запад");
  const isShowed = useSelector((state) => state.filter.filter.DropdownEmployee);
  const dropCallsList = useSelector(
    (state) => state.filter.filter.DropdownCalls
  );
  const dropErrrosList = useSelector(
    (state) => state.filter.filter.DropdownErrors
  );
  const dropScoresList = useSelector(
    (state) => state.filter.filter.DropdownScores
  );
  const dropPeriodList = useSelector(
    (state) => state.filter.filter.DropdownPeriod
  );
  const dropOrgsList = useSelector((state) => state.filter.filter.DropdownOrgs);
  useEffect(() => {
    setEmployeeName("John");
  }, []);

  useEffect(() => {
    setOrgs("ИП Митрофанов М.М.");
  }, []);
  const dispatch = useDispatch();

  // const buttonHandler = (isShowed) => setIsShowed(!isShowed);

  switch (variant) {
    case "All employee":
      return (
        <div>
          <BtnFilter
            text="Все сотрудники"
            buttonHandler={() => dispatch(dropHandler(isShowed))}
          />
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
    case "All calls":
      return (
        <div>
          <BtnFilter
            text="Все звонки"
            buttonHandler={() => dispatch(dropCalls(dropCallsList))}
          />
          <div className={dropCallsList ? s.dropdownlist : s.unvisible}>
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
    case "All errors":
      return (
        <div>
          <BtnFilter
            text="Все ошибки"
            buttonHandler={() => dispatch(dropErrors(dropErrrosList))}
          />
          <div className={dropErrrosList ? s.dropdownlist : s.unvisible}>
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
    case "All scores":
      return (
        <div>
          <BtnFilter
            text="Все оценки"
            buttonHandler={() => dispatch(dropScores(dropScoresList))}
          />
          <div className={dropScoresList ? s.dropdownlist : s.unvisible}>
            <div className={s.dropdownTitle}>Все оценки</div>
            <div className={s.dropdownItem}>Распознать</div>
            <div className={s.dropdownItem}>Скрипт не использован</div>
            <Scores condition="Плохо" />
            <Scores condition="Хорошо" />
            <Scores condition="Отлично" />
            <Dots variant={"Excellent"} />
            <Dots variant={"Good"} />
            <Dots variant={"Bad"} />
          </div>
        </div>
      );
    case "Period":
      return (
        <div>
          <div>
            <ButtonDate
              buttonHandler={() => dispatch(dropPeriod(dropPeriodList))}
            />
          </div>
          <div className={dropPeriodList ? s.dropdownlist : s.unvisible}>
            <div className={s.dropdownTitle}>3 дня</div>
            <div className={s.dropdownItem}>Неделя</div>
            <div className={s.dropdownItem}>Месяц</div>
            <div className={s.dropdownItem}>Год</div>
            <div className={s.dropdownItemDate}>
              <span>Указать даты</span>
              <div>
                <input
                  type="date"
                  placeholder="__.__.__"
                  className={s.selectDate}
                  required
                />
                -
                <input
                  type="date"
                  placeholder="__.__.__"
                  className={s.selectDate}
                  required
                />
              </div>
            </div>
          </div>
        </div>
      );
    case "All orgs":
      return (
        <div>
          <BtnFilter
            text="Все организации"
            buttonHandler={() => dispatch(dropOrgs(dropOrgsList))}
          />
          <div className={dropOrgsList ? s.dropdownlist : s.unvisible}>
            <div className={s.dropdownTitle}>Все организации</div>
            <div className={s.dropdownItem}>{orgs}</div>
            <div className={s.dropdownItem}>{orgs}</div>
          </div>
        </div>
      );
  }
};
