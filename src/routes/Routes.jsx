import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home";
import Statistics from "../Pages/Statistics";
import Dashboard from "../Pages/Dashboard";
import CategoryCard from "../components/CategoryCard";



const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
        {
            path:'/',
            element:<Home/>,
            loader:()=>fetch('../category.json'),
            children:[
              {
                path: '/',
                element:<CategoryCard/>,
                loader: ()=> fetch('../gadgets.json')
              },
              {
                path: '/category/:category',
                element:<CategoryCard/>,
                loader: ()=> fetch('../gadgets.json')
              }
            ]
        },
        {
            path:'/statistics',
            element:<Statistics/>
        },
        {
            path:'/dashboard',
            element:<Dashboard/>
        },
        
    ]
  },
]);

export { routes };
