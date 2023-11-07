
import "./styles/global.css";
import { Player } from "../ui/Player/Player";

function App() {
  let recordId = "MToxMDA2NzYxNToxNDMwMDM3NzExNzow"
  let partnerID = "578"
  return (
    <>
<Player recordId={recordId}  partnerID={partnerID}/>
    </>
  );
}

export default App;
