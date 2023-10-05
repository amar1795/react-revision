import SIdebar from "./components/sidebar/SIdebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css"
import Home from "./pages/home/Home";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,

} from "react-router-dom";
import Userlist from "./pages/userlisst/Userlist";
import User from "./pages/user/User";
import Newuser from "./pages/newuser/Newuser";
import Productlist from "./pages/productList/Productlist";
import Product from "./pages/product/Product";
import NewProduct from "./pages/home/newproduct/Newproduct";
import { useState } from "react";
import Login from "./pages/login/Login";


  function App() {
  
    const [auth,setAuth]=useState(false)

    return (
    
      <div className="App">
        
          <BrowserRouter>

       {auth && (
        <>
          <Topbar />
        <div className="container">
          <SIdebar />
            <Routes>
        
          <Route path="/"  element={<Home/>} />
          <Route path="/users"  element={<Userlist/>} />
          <Route path="/user/:userId"  element={<User/>} />
          <Route path="/newuser"  element={<Newuser/>} />
          <Route path="/movies"  element={<Productlist/>} />
          <Route path="/product/:productId"  element={<Product/>} />
          <Route path="/newProduct"  element={<NewProduct/>} />
        
            </Routes>
        </div>
        </>
            )}
          
          { !auth && <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>

          }
      </BrowserRouter>
      
      </div>
    );
  }

export default App;