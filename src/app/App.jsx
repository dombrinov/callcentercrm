import "./styles/global.css";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { Totals } from "../pages/Totals/Totals";
import { Orders } from "../pages/Orders/Orders";
import { Messages } from "../pages/Messages/Messages";
import { Calls } from "../pages/Calls/Calls";
import { Partners } from "../pages/Partners/Partners";
import { Documents } from "../pages/Documents/Documents";
import { Employees } from "../pages/Employees/Employees";
import { Reports } from "../pages/Reports/Reports";
import { Data } from "../pages/Data/Data";
import { Settings } from "../pages/Settings/Settings";
import { NotFound } from "../pages/NotFound/NotFound";

function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <Totals />,
    },
    {
      path: "/orders",
      element: <Orders />,
    },
    {
      path: "/messages",
      element: <Messages />,
    },
    {
      path: "/calls",
      element: <Calls />,
    },
    {
      path: "/partners",
      element: <Partners />,
    },
    {
      path: "/documents",
      element: <Documents />,
    },
    {
      path: "/employees",
      element: <Employees />,
    },
    {
      path: "/reports",
      element: <Reports />,
    },
    {
      path: "/data",
      element: <Data />,
    },
    {
      path: "/settings",
      element: <Settings />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
}
export default App;
