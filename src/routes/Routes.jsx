import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home";
import Statistics from "../Pages/Statistics";
import Dashboard from "../Pages/Dashboard";
import CategoryCard from "../components/CategoryCard";
import Details from "../Pages/Details";
import Gadgets from "../Pages/Gadgets";
import ErrorPage from "../Pages/ErrorPage";



const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement: <ErrorPage/>,
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
          element:<Statistics/>,
          loader: ()=> fetch('../gadgets.json')
      },
      {
        path:'/gadgets',
        element:<Gadgets/>,
        loader: ()=> fetch('../gadgets.json')
      }
        
    ]
  },
]);

export { routes };
