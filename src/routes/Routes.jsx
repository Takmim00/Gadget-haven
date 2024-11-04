import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home";
import Statistics from "../Pages/Statistics";
import Dashboard from "../Pages/Dashboard";
import CategoryCard from "../components/CategoryCard";
import Details from "../Pages/Details";



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
            path:'/details',
            element:<Details/>,
            loader: ()=> fetch('../gadgets.json')
        },
        {
            path:'/details/:id',
            element:<Details/>,
            loader: ()=> fetch('../gadgets.json')
        },
        {
            path:'/dashboard',
            element:<Dashboard/>,
            loader: ()=> fetch('../gadgets.json')
        },
        {
          path:'/statistics',
          element:<Statistics/>
      }
        
    ]
  },
]);

export { routes };
