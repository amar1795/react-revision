import SIdebar from "./components/sidebar/SIdebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css"
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Topbar/>
      <div className="container">
      <SIdebar/>
      <Home/>
      </div>
    </div>
  );
}

export default App;
