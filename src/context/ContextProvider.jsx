import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const ContextProvider = ({ children }) => {
  const SPLASH_SCREEN_DURATION = 3000; // 5 seconds in milliseconds
  const [splashScreenVisible, setSplashScreenVisible] = useState(true);

  useEffect(() => {
    // Hide the splash screen after the specified duration
    const timer = setTimeout(() => {
      setSplashScreenVisible(false);
    }, SPLASH_SCREEN_DURATION);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <AppContext.Provider value={{ splashScreenVisible }}>
      {children}
    </AppContext.Provider>
  );
};