import './App.scss';
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import Watch from './pages/watch/Watch';
import Login from './pages/login/Login';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './context/authcontext/AuthContext';

function App() {
  const {user}=useContext(AuthContext);
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        {/* react router 6 doesnot supprt or need exact */}
        {/* redirect is crashing in this version need to check, althouh it is working without redirect */}
        <Route path="/" element={
              user ? <Home /> : <Navigate to="/login" replace />
            } />
        <Route path="/Register" element={<Register/>} />
        <Route path="/Login" element={ <Login/>} /> 

        { user && (
        <>      
        <Route path="/movies" element={<Home  type="movie"/>} />
        <Route path="/series" element={<Home  type="series"/>} />
        <Route path="/watch" element={<Watch/>} />
        </>      
        )
      

        }
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
