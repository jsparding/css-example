import logo from "./logo.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Wotjd36 from "./pages/Wotjd36";
import Root from "./pages/Root";
import Wotjd36Detail from "./pages/Wotjd36Detail";
const router_1 = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "/wotjd36", element: <Wotjd36 /> },
      { path: "/wotjd36:wotjd36Id", element: <Wotjd36Detail /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router_1} />;
}

export default App;
