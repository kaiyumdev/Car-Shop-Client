import Main from "../../Layout/Main";
import Home from "./../../Pages/Home/Home/Home";
import Header from "./../../Shared/Header/Header";
import Footer from "./../../Shared/Footer/Footer";
import Login from './../../Pages/Login/Login';
import SignUp from './../../Pages/SignUp/SignUp';
import Checkout from './../../Pages/Home/Services/Checkout';
import Orders from './../../Pages/Orders/Orders';

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/header", element: <Header></Header> },
      { path: "/footer", element: <Footer></Footer> },
      { path: "/login", element: <Login></Login> },
      { path: "/signup", element: <SignUp></SignUp> },
      { path:"/checkout/:id", element: <Checkout></Checkout>,
      loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
     },
     { path: "/orders", element: <Orders></Orders>}
    ],
  },
]);

export default router;
