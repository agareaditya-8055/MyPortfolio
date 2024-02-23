import { Link } from "react-router-dom";

const Header = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <header className="flex mt-5 items-center justify-around   my-0 mx-auto max-w-[80rem] border-b-[1px] border-blue-700">
      <h1 className="font-sans font-bold text-5xl text-customColor">AA</h1>
      <ul className="flex items-center space-x-14 ">
        <li>
          <Link to="/" className="text-lg font-medium hover:text-gray-700">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-lg font-medium hover:text-gray-700">
            About
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className="text-lg font-medium hover:text-gray-700"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/achievements"
            className="text-lg font-medium hover:text-gray-700"
          >
            Achievements
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="text-lg font-medium hover:text-gray-700"
          >
            Contact
          </Link>
        </li>
      </ul>

      <button
        className="text-gray-700 hover:text-gray-500 focus:outline-none"
        onClick={toggleDarkMode}
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
};

export default Header;
