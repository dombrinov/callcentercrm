import React from "react";
import { Navigation } from "../../components/Navigation/Navigation";
import s from "./Calls.module.scss";
import { Layout } from "../../components/Layout/Layout";
import { BalanceButton } from "../../ui/BalanceButton/BalanceButton";
import { ButtonDate } from "../../ui/ButtonDate/ButtonDate";
import { Dropdown } from "../../ui/Dropdown/Dropdown";
import { InputPhoneNumber } from "../../ui/InputPhoneNumber/InputPhoneNumber";
import GreenBar from "./assets/greenBar.svg";
import { TableName } from "../../components/TableName/TableName.jsx";
import { Table } from "../../components/Table/Table";
import { useAddProductMutation } from "../../reduxStore/ApiSlice.js";
import { useEffect, useState } from "react";
import { DirectoriaDropButton } from "../../ui/DirectoriaDropButton/DirectoriaDropButton";

export const Calls = () => {
  const [addProduct] = useAddProductMutation();
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async (start, end) => {
      let data = await addProduct({
        start: start,
        end: end,
      });
      setData([...data.data.results]);
    };
    getData("20101011", "20241011");
  }, []);

  const showIncommingCalls = (type) => {
    let calls = data.filter((el) => (el.in_out === type ? el : false));
    setData(calls);
  };

  console.log(data);
  return (
    <Layout>
      <Navigation />
      <div>
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
                Качество разговоров{" "}
                <span className={s.headerSpanQual}>40%</span>
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
            <DirectoriaDropButton />
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
                <Dropdown variant={"All types"} showIncommingCalls={showIncommingCalls} />
                <Dropdown variant={"All employee"} />
                <Dropdown variant={"All calls"} />
                <Dropdown variant={"All sources"} />
                <Dropdown variant={"All errors"} />
                <Dropdown variant={"All scores"} />
              </div>
            </div>
            <div>
              <TableName>
                {data.map((el) => {
                  return (
                    <Table
                      key={el.id}
                      call={el.in_out}
                      date={el.date}
                      avatar={el.person_avatar}
                      number={el.to_number}
                      source={el.source}
                      time={el.time}
                    />
                  );
                })}
              </TableName>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
};
