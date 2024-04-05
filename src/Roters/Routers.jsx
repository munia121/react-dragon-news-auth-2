import { createBrowserRouter } from "react-router-dom";
import Root from "../LayOut/Root";
import Home from "../Pages/Home";
import Slider from "../Pages/Slider/Slider";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import News from "../components/News";
import PrivetRoute from "./PrivetRoute";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader: () =>fetch('/news.json')
        },
        {
          path:'/news/:id',
          element:<PrivetRoute><News></News></PrivetRoute>
        },
        {
          path:'/slider',
          element:<Slider></Slider>
        },
        {
          path:'register',
          element:<Register></Register>
        },
        {
          path:'/login',
          element:<Login></Login>
        }
      ]
    },
  ]);