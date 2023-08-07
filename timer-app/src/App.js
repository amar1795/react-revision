import Timer from './components/Timer';
import './App.css';
import Mainsettings from './components/Mainsettings';
import { useState } from 'react';


function App() {
  const [showSettings,setshowSettings]=useState(true);
  
  return (
    <main>
      {/* to show settings page when settings is clicked */}
      {showSettings ?<Mainsettings/>:<Timer/>}
     
    </main>
  );
}

export default App;
