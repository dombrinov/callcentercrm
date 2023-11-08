import s from "./Directoria.module.scss";
import avatar from "./assets/avatar.svg";
import ReactDom from "react-dom";

const portal = document.getElementById("portal");

export const Directoria = () => {
  return ReactDom.createPortal(
    <div className={s.directoria__wrapper}>
      <div className={s.directoria__top__info}>
        <h3 className={s.directoria__boss}>Упоров Кирилл</h3>
        <p className={s.directoria__dot}>
          Директор
          <span className={s.directoria__dot__img}>
            <svg
              width="4"
              height="4"
              viewBox="0 0 4 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle id="Ellipse 309" cx="2" cy="2" r="2" fill="#ADBFDF" />
            </svg>
          </span>
          Санкт-Петербург
        </p>
        <p>
          <span className={s.directoria__phone__img}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="icon /  calls-24px" clipPath="url(#clip0_60_4208)">
                <path
                  id="Vector"
                  d="M4.36 3.33333C4.4 3.92667 4.5 4.50667 4.66 5.06L3.86 5.86C3.58667 5.06 3.41333 4.21333 3.35333 3.33333H4.36ZM10.9333 11.3467C11.5 11.5067 12.08 11.6067 12.6667 11.6467V12.64C11.7867 12.58 10.94 12.4067 10.1333 12.14L10.9333 11.3467ZM5 2H2.66667C2.3 2 2 2.3 2 2.66667C2 8.92667 7.07333 14 13.3333 14C13.7 14 14 13.7 14 13.3333V11.0067C14 10.64 13.7 10.34 13.3333 10.34C12.5067 10.34 11.7 10.2067 10.9533 9.96C10.8867 9.93333 10.8133 9.92667 10.7467 9.92667C10.5733 9.92667 10.4067 9.99333 10.2733 10.12L8.80667 11.5867C6.92 10.62 5.37333 9.08 4.41333 7.19333L5.88 5.72667C6.06667 5.54 6.12 5.28 6.04667 5.04667C5.8 4.3 5.66667 3.5 5.66667 2.66667C5.66667 2.3 5.36667 2 5 2Z"
                  fill="#ADBFDF"
                />
              </g>
              <defs>
                <clipPath id="clip0_60_4208">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>{" "}
          8 800 333-17-21
        </p>
        <p>
          <span>
            <svg
              className={s.directoria__mail__img}
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="icon / mail_outline-24px" clipPath="url(#clip0_60_4207)">
                <path
                  id="Vector"
                  d="M13.3333 2.66666H2.66659C1.93325 2.66666 1.33992 3.26666 1.33992 3.99999L1.33325 12C1.33325 12.7333 1.93325 13.3333 2.66659 13.3333H13.3333C14.0666 13.3333 14.6666 12.7333 14.6666 12V3.99999C14.6666 3.26666 14.0666 2.66666 13.3333 2.66666ZM13.3333 12H2.66659V5.33332L7.99992 8.66666L13.3333 5.33332V12ZM7.99992 7.33332L2.66659 3.99999H13.3333L7.99992 7.33332Z"
                  fill="#ADBFDF"
                />
              </g>
              <defs>
                <clipPath id="clip0_60_4207">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>{" "}
          hi@skilla.ru
        </p>
      </div>
      <div>
        <ul className={s.directoria__list}>
          {" "}
          Операторы
          <li>
            <img src={avatar} alt="" />
            Мирон Батонов
          </li>
          <li>
            <img src={avatar} alt="" />
            Алексей Ильин
          </li>
          <li>
            {" "}
            <img src={avatar} alt="" />
            Милана Константинопольская
          </li>
        </ul>
        <ul className={s.directoria__list}>
          {" "}
          Логисты
          <li>
            {" "}
            <img src={avatar} alt="" />
            Александра Сизых
          </li>
          <li>
            {" "}
            <img src={avatar} alt="" />
            Илья Алексеев
          </li>
          <li>
            {" "}
            <img src={avatar} alt="" />
            Владимир Петров
          </li>
        </ul>
        <ul className={s.directoria__list}>
          {" "}
          Бухгалтеры
          <li>
            {" "}
            <img src={avatar} alt="" />
            Полина Калинина
          </li>
          <li>
            {" "}
            <img src={avatar} alt="" />
            Наталья Натальева
          </li>
          <li>
            {" "}
            <img src={avatar} alt="" />
            Константин Константинопольский
          </li>
        </ul>
      </div>
    </div>,
    portal,
  );
};
