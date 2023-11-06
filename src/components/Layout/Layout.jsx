/* eslint-disable react/prop-types */
import s from "./Layout.module.scss";

export const Layout = ({ children }) => {
  return <div className={s.flex}>{children}</div>;
};
