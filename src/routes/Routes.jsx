import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home";
import Statistics from "../Pages/Statistics";
import Dashboard from "../Pages/Dashboard";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/statistics',
            element:<Statistics/>
        },
        {
            path:'/dashboard',
            element:<Dashboard/>
        }
    ]
  },
]);

export { routes };
