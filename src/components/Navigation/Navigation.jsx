import React from "react";
import { Link } from "react-router-dom";
import s from "./Navigation.module.scss";
import { ButtonMain } from "../../ui/ButtonMain/ButtonMain";
import Logo from "./assets/logo.svg";
import total from "./assets/totals.svg";
import order from "./assets/order.svg";
import message from "./assets/messages.svg";
import partner from "./assets/partner.svg";
import document from "./assets/document.svg";
import employee from "./assets/employee.svg";
import report from "./assets/report.svg";
import data from "./assets/data.svg";
import settings from "./assets/settings.svg";
import call from "./assets/calls.svg";

export const Navigation = () => {
  const navLinks = [
    {
      path: "/",
      label: "Итоги",
      logo: total,
    },
    {
      path: "/orders",
      label: "Заказы",
      logo: order,
    },
    {
      path: "/messages",
      label: "Сообщения",
      logo: message,
    },
    {
      path: "/calls",
      label: "Звонки",
      logo: call,
    },
    {
      path: "/partners",
      label: "Контрагенты",
      logo: partner,
    },
    {
      path: "/documents",
      label: "Документы",
      logo: document,
    },
    {
      path: "/employees",
      label: "Исполнители",
      logo: employee,
    },
    {
      path: "/reports",
      label: "Отчеты",
      logo: report,
    },
    {
      path: "/data",
      label: "База знаний",
      logo: data,
    },
    {
      path: "/settings",
      label: "Настройки",
      logo: settings,
    },
  ];
  return (
    <div className={s.navigation}>
      <img src={Logo} alt="" />
      {navLinks.map((el) => {
        return (
          <div key={el.name} className={s.navdiv}>
            <Link className={s.navigationItem} to={el.path}>
              <img src={el.logo} alt="" />
              {el.label}
            </Link>
          </div>
        );
      })}
      <ButtonMain buttonText={"plug__200px__blue"}>Добавить заказ</ButtonMain>
      <ButtonMain buttonText={"plug__200px__blue"}>Оплата</ButtonMain>
    </div>
  );
};
