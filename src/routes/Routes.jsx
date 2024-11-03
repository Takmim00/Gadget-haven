import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/Mainlayout";
import Home from "../Pages/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
        {
            page: '/',
            element:<Home/>
        }
    ]
  },
]);

export { routes };
