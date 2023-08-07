import Timer from './components/Timer';
import './App.css';
import Mainsettings from './components/Mainsettings';
import { useState } from 'react';
import Settingscontext from './Settingscontext';


function App() {
  const [showSettings,setshowSettings]=useState(true);
  const [workMinutes,setworkMinutes]=useState();
  const [breakMinutes,setbreakMinutes]=useState();
  
  return (
    <main>
      <Settingscontext.Provider value={{
        workMinutes,
        breakMinutes,
        setworkMinutes,
        setbreakMinutes
      }}/>
      {/* to show settings page when settings is clicked */}
      {showSettings ?<Mainsettings/>:<Timer/>}
     <Settingscontext.Provider/>
    </main>
  );
}

export default App;
