import { useState } from "react";
import Body from "./components/body/Body";
import Header from "./components/header/Header";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode toggle

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className={`container mx-auto px-4 `}>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Body />
    </div>
  );
}

export default App;
