import React from "react";
import { Navigation } from "../../components/Navigation/Navigation";
import s from "./Calls.module.scss";
import { Directoria } from "../../ui/Directoria/Directoria";
import { Layout } from "../../components/Layout/Layout";
import { BalanceButton } from "../../ui/BalanceButton/BalanceButton";
import { ButtonDate } from "../../ui/ButtonDate/ButtonDate";
import { Dropdown } from "../../ui/Dropdown/Dropdown";
import { InputPhoneNumber } from "../../ui/InputPhoneNumber/InputPhoneNumber";
import GreenBar from "./assets/greenBar.svg";

export const Calls = () => {
  return (
    <Layout>
      <Navigation />
      <div className={s.flexPages}>
        <div className={s.flexCallsHeader}>
          <p className={s.dayDate}>Среда, 13 окт.</p>
          <div className={s.flexBar}>
            <p className={s.headerText}>
              Новые звонки 
              <span className={s.headerSpanCalls}> 20 из 30 шт.</span>
            </p>
            <img src={GreenBar} alt="" />
          </div>
          <div className={s.flexBar}>
            <p className={s.headerText}>
              Качество разговоров <span className={s.headerSpanQual}>40%</span>
            </p>
            <img src={GreenBar} alt="" />
          </div>
          <div className={s.flexBar}>
            <p className={s.headerText}>
              Конверсия в заказе <span className={s.headerSpanCon}>67%</span>
            </p>
            <img src={GreenBar} alt="" />
          </div>

          <p>ИП Сидорова Александра Михайловна</p>
          <Directoria />
        </div>
        <div className={s.calls}>
          <div className={s.callsButton}>
            <BalanceButton />
            <ButtonDate />
          </div>
          <div className={s.filtersAndInput}>
            <div>
              <InputPhoneNumber />
            </div>
            <div className={s.callsButton}>
              <Dropdown variant={"All types"} />
              <Dropdown variant={"All employee"} />
              <Dropdown variant={"All calls"} />
              <Dropdown variant={"All sources"} />
              <Dropdown variant={"All errors"} />
              <Dropdown variant={"All scores"} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};