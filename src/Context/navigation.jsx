import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Navigation = createContext();

const NavigationProvider = ({ children }) => {
  const [active, setActive] = useState("/");
  const [isExpanded, setIsExpanded] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    navigate(active);
  }, [active, navigate]);

  const toggleWidth = () => {
    setIsExpanded((prevState) => !prevState);
  };
  return (
    <Navigation.Provider
      value={{ active, setActive, isExpanded, toggleWidth }}
    >
      {children}
    </Navigation.Provider>
  );
};
const useNav = () => useContext(Navigation);
export { NavigationProvider, useNav };
