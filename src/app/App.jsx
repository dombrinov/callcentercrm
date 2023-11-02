import { Arrows } from "../ui/Arrows/Arrows";
import { Dots } from "../ui/Dots/Dots";
import { IconsItems } from "../ui/IconsItems/IconsItems";
import { Avatar } from "../ui/Avatar/Avatar";
import { Dropdown } from "../ui/Dropdown/Dropdown";
import { InputCheckbox } from "../ui/InputCheckbox/InputCheckbox";
import { Loading } from "../ui/Loading/Loading";
import { Scores } from "../ui/Scores/Scores";
import { Selector } from "../ui/Selector/Selector";
import "./styles/global.css";
import { ExitMin } from "../ui/ExitMin/ExitMin";
import { ExitMax } from "../ui/ExitMax/ExitMax";
import { ButtonMain } from "../ui/ButtonMain/ButtonMain";
import { BalanceButton } from "../ui/BalanceButton/BalanceButton";
import { BtnFilter } from "../ui/BtnFilter/BtnFilter";

function App() {
  return (
    <>
      <Arrows variant={"incommingCall"} />
      <Arrows variant={"outgoingCall"} />
      <Dots variant={"Excellent"} />
      <Dots variant={"Good"} />
      <Dots variant={"Bad"} />
      <Avatar src={"https://lk.skilla.ru/img/noavatar.jpg"} />
      <IconsItems variant={"Alert"} />
      <IconsItems variant={"ArrowDropdown"} />
      <IconsItems variant={"ArrowDropup"} />
      <IconsItems variant={"Exit"} />
      <IconsItems variant={"ExpandDown"} />
      <IconsItems variant={"ExpandUp"} />
      <IconsItems variant={"IMedium"} />
      <IconsItems variant={"ISmall"} />
      <IconsItems variant={"PortretProb"} />
      <IconsItems variant={"Web"} />
      <Dropdown variant={"All employee"} />
      <Dropdown variant={"All calls"} />
      <Dropdown variant={"All errors"} />
      <Dropdown variant={"All scores"} />
      <Dropdown variant={"Period"} />
      <Dropdown variant={"All orgs"} />
      <BalanceButton />
      <BtnFilter text="Сбросить фильтры" />
      <BtnFilter text="Константин К." />

      <Loading />
      <InputCheckbox />
      <Selector variant="quest" />
      <Selector variant="questMax" />
      <Scores condition="Плохо" />
      <Scores condition="Хорошо" />
      <Scores condition="Отлично" />
      <ExitMin />
      <ExitMax />
      <ButtonMain buttonText="pay__200px">Оплата</ButtonMain>
    </>
  );
}

export default App;
