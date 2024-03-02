import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Alerts from "./pages/Alerts";
import Training from "./pages/Training";
import Automation from "./pages/Automation";
import Portfolio from "./pages/Portfolio";
import Trading from "./pages/Trading";
// import { action } from "./features/filters/Stock";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Alerts />,
      },
      {
        path: "/training",
        element: <Training />,
      },
      {
        path: "/automation",
        element: <Automation />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/trading",
        element: <Trading />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
