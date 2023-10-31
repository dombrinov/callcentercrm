import { Arrows } from "../ui/Arrows/Arrows";
import { Dots } from "../ui/Dots/Dots";
import { IconsItems } from "../ui/IconsItems/IconsItems";
import { Avatar } from "../ui/Avatar/Avatar";

import "./styles/global.css";
import { Dropdown } from "../ui/Dropdown/Dropdown";

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
      <Dropdown variant={"Все сотрудники"} />
      <Dropdown variant={"Все звонки"} />
      <Dropdown variant={"Все ошибки"} />
    </>
  );
}

export default App;
