import SIdebar from "./components/sidebar/SIdebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css"
import Home from "./pages/home/Home";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,

} from "react-router-dom";
import Userlist from "./pages/userlisst/Userlist";
import User from "./pages/user/User";
import Newuser from "./pages/newuser/Newuser";
import Productlist from "./pages/productList/Productlist";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newproduct/Newproduct";
import { useContext, useState } from "react";
import Login from "./pages/login/Login";
import { AuthContext } from "./context/authcontext/AuthContext";


  function App() {
  
    const {user}=useContext(AuthContext);

    // const [user,setAuth]=useState(false)


    return (
    
      <div className="App">
   
          <BrowserRouter>
          <Routes>
            {/* login condition when the user succesfully logs in he will be redireced to home page if not  then he will still be in login page */}
            <Route path="/login"
              element={user ? <Navigate to="/" replace={true} /> : <Login/>}
           />
          </Routes>

       {user && (
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
          <Route path="/movie/:movieId"  element={<Product/>} />
          <Route path="/newProduct"  element={<NewProduct/>} />
        
            </Routes>
        </div>
        </>
            )}
          
          
        
         
  
      </BrowserRouter>
      
      </div>
    );
  }

export default App;
