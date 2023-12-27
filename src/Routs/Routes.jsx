import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import News from "../pages/News/News";
import PrivateRout from "./PrivateRout";
import Error from "../pages/error/Error";
import About from "../pages/About/About";
import Careers from "../pages/Careers/Careers";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error></Error>,
      children:[
        
    {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('news.json')
    },
    {
     path:'/news/:id',
     element:<PrivateRout><News></News></PrivateRout>,
     loader:()=>fetch('/news.json')
    },
    {
        path:'/login',
        element:<Login></Login>,
    },
    {
        path:'/register',
        element:<Register></Register>,
    },
    {
        path:'/about',
        element:<About></About>
    },
    {
        path:'/career',
        element:<Careers></Careers>
    },
    
      
    ]
    },
  ]);
  export default router;