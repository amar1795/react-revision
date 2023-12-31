import React, { createContext, useState } from 'react';

const SettingsContext = createContext({
    
  });
export const SettingsProvider = ({ children }) => {
    const [showSettings,setshowSettings]=useState(false);
    const [workMinutes, setWorkMinutes] = useState(1);
    const [breakMinutes, setBreakMinutes] = useState(1);
    const [ispaused,setispaused]=useState(true);

  
    return (
      <SettingsContext.Provider value={{ workMinutes, breakMinutes, setWorkMinutes, setBreakMinutes,showSettings,setshowSettings ,ispaused,setispaused}}>
        {children}
      </SettingsContext.Provider>
    );
  };

export default SettingsContext;
