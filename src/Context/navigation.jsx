import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Navigation = createContext();

const NavigationProvider = ({ children }) => {
  const [active, setActive] = useState("/");
  const navigate = useNavigate();
  useEffect(() => {
    navigate(active);
  }, [active, navigate]);
  return (
    <Navigation.Provider value={{ active, setActive }}>
      {children}
    </Navigation.Provider>
  );
};
const useNav = () => useContext(Navigation);
export { NavigationProvider, useNav };
