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
import { useDispatch, useSelector } from "react-redux";
import { dropTypes } from "../../reduxStore/filterSlice.js";

export const Calls = () => {
  const [addProduct] = useAddProductMutation();
  const [data, setData] = useState([]);
  const [calls, setCalls] = useState(3);
  const [title, setTitle] = useState("Все типы");
  const dropTypesList = useSelector(
    (state) => state.filter.filter.DropdownTypes.isOpened,
  );

  const [now, setNow] = useState(new Date().toISOString());
  console.log(now);
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
  const dispatch = useDispatch();
  const showCalls = (type, text) => {
    setCalls(type);
    setTitle(text);
    dispatch(dropTypes(dropTypesList));
  };

  console.log(data);

  const [filterPeriod, setFilterPeriod] = useState("3 дня");

  const togglePeriodRight = (filterPeriod) => {
    switch (filterPeriod) {
      case "3 дня":
        setFilterPeriod("Неделя");
        break;
      case "Неделя":
        setFilterPeriod("Месяц");
        break;
      case "Месяц":
        setFilterPeriod("Год");
        break;
      case "Год":
        setFilterPeriod("3 дня");
        break;
      default:
        setFilterPeriod("3 дня");

        return filterPeriod;
    }
  };
  const togglePeriodLeft = (filterPeriod) => {
    switch (filterPeriod) {
      case "3 дня":
        setFilterPeriod("Год");
        break;
      case "Год":
        setFilterPeriod("Месяц");
        break;
      case "Месяц":
        setFilterPeriod("Неделя");
        break;
      case "Неделя":
        setFilterPeriod("3 дня");
        break;
      default:
        setFilterPeriod("3 дня");

        return filterPeriod;
    }
  };

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
              <ButtonDate
                togglePeriodRight={() => togglePeriodRight(filterPeriod)}
                togglePeriodLeft={() => togglePeriodLeft(filterPeriod)}
                filterPeriod={filterPeriod}
              />
            </div>
            <div className={s.filtersAndInput}>
              <div>
                <InputPhoneNumber />
              </div>
              <div className={s.callsButton}>
                <Dropdown
                  variant={"All types"}
                  showCalls={showCalls}
                  title={title}
                  dropTypesList={dropTypesList}
                />
                <Dropdown variant={"All employee"} />
                <Dropdown variant={"All calls"} />
                <Dropdown variant={"All sources"} />
                <Dropdown variant={"All errors"} />
                <Dropdown variant={"All scores"} />
              </div>
            </div>
            <div>
              <TableName>
                {data
                  .filter((item) =>
                    calls === 3 ? item : item.in_out === calls,
                  )
                  .map((el) => {
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
