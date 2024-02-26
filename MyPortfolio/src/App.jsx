import { useSelector } from "react-redux";
import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const isDarkMode = useSelector((state) => state.theme.response);
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(isDarkMode);
  }, [isDarkMode]);
  return (
    <div className={`container mx-auto px-4 `}>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
