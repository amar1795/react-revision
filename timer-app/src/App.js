import Timer from './components/Timer';
import './App.css';
import Mainsettings from './components/Mainsettings';
// import { useState } from 'react';
import Settingscontext, { SettingsProvider } from './Settingscontext';
import { useContext } from 'react';

function App() {
  const context=useContext(Settingscontext);
    const {showSettings}=context;
  // const { showSettings } = useContext(Settingscontext); // Correct the variable name
  return (
    <main> 
      <SettingsProvider></SettingsProvider>
      {/* to show settings page when settings is clicked */}
      {showSettings ?<Mainsettings/>:<Timer/>}
     
    </main>
  );
}

export default App;
