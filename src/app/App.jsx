import { Dropdown } from "../ui/Dropdown/Dropdown";
import { InputCheckbox } from "../ui/InputCheckbox/InputCheckbox";
import { Loading } from "../ui/Loading/Loading";
import { Scores } from "../ui/Scores/Scores";
import { Selector } from "../ui/Selector/Selector";
import "./styles/global.css";

function App() {
  return (
    <>
      <Dropdown />
      <Loading />
      <InputCheckbox />
      <Selector variant="quest" />
      <Selector variant="questMax" />
      <Scores condition="Плохо" />
      <Scores condition="Хорошо" />
      <Scores condition="Отлично" />
    </>
  );
}

export default App;
