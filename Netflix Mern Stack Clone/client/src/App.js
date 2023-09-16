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
  redirect,
} from "react-router-dom";

function App() {
  const user=true;
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        {/* react router 6 doesnot supprt or need exact */}
        {/* redirect is crashing in this version need to check, althouh it is working without redirect */}
        <Route path="/" element={user? <Home /> : <Register/>} />

        { user && (
        <>      
        <Route path="/movies" element={<Home  type="movies"/>} />
        <Route path="/series" element={<Home  type="series"/>} />
        <Route path="/Watch" element={<Watch/>} />
        <Route path="/Login" element={ <Login/>} /> 
        <Route path="/Register" element={<Register/>} />
        </>      
        )
      

        }
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
