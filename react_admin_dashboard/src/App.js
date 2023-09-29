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



function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Topbar/>
      <div className="container">
          <SIdebar/>
          <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/users"  element={<Userlist/>} />
          </Routes>
      </div>
     
    </BrowserRouter>
     
    </div>
  );
}

export default App;
