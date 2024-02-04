// ButtonClickContext.js
import { createContext, useContext, useState } from 'react';

const ButtonClickContext = createContext();

export const ButtonClickProvider = ({ children }) => {
  const [buttonClickCount, setButtonClickCount] = useState(0);

  const incrementButtonClickCount = () => {
    setButtonClickCount((prevCount) => prevCount + 1);
  };

  return (
    <ButtonClickContext.Provider value={{ buttonClickCount, incrementButtonClickCount }}>
      {children}
    </ButtonClickContext.Provider>
  );
};

export const useButtonClickContext = () => useContext(ButtonClickContext);
