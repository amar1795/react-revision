import SIdebar from "./components/sidebar/SIdebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css"

function App() {
  return (
    <div className="App">
      <Topbar/>
      <div className="container">
      <SIdebar/>
      <div className="others">other pages</div>

      </div>
    </div>
  );
}

export default App;
