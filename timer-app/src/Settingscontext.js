import React, { createContext, useState } from 'react';

const SettingsContext = createContext({
    
  });
export const SettingsProvider = ({ children }) => {
    const [showSettings,setshowSettings]=useState(false);
    const [workMinutes, setWorkMinutes] = useState(25);
    const [breakMinutes, setBreakMinutes] = useState(5);
  
    return (
      <SettingsContext.Provider value={{ workMinutes, breakMinutes, setWorkMinutes, setBreakMinutes,showSettings,setshowSettings }}>
        {children}
      </SettingsContext.Provider>
    );
  };

export default SettingsContext;
