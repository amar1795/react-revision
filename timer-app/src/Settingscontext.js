import React, { createContext, useState } from 'react';

const SettingsContext = createContext({
    workMinutes: 25,
    breakMinutes: 5,
    setWorkMinutes: () => {},
    setBreakMinutes: () => {},
  });
export const SettingsProvider = ({ children }) => {
    const [workMinutes, setWorkMinutes] = useState(25);
    const [breakMinutes, setBreakMinutes] = useState(5);
  
    return (
      <SettingsContext.Provider value={{ workMinutes, breakMinutes, setWorkMinutes, setBreakMinutes }}>
        {children}
      </SettingsContext.Provider>
    );
  };

export default SettingsContext;
