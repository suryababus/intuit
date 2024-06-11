import { Link } from "@tanstack/react-router";
import { useTheme } from "../../hooks/states/useTheme";
import { MoonIcon } from "../icons/moon";
import { SunIcon } from "../icons/sun";

export const Navbar = () => {
  const { theme, setTheme } = useTheme();
  return (
    <nav className="border-b-2 border-foreground/30 grid grid-cols-3 justify-between items-center sticky top-0 w-full">
      <Link className="text-3xl font-bold p-4" to="/">
        Our Earth
      </Link>
      <div className="flex flex-row justify-self-center">
        <Link className="text-xl  p-4" to="/countries">
          Browse Countries
        </Link>
        <Link className="text-xl  p-4" to="/about-us">
          About us
        </Link>
      </div>
      <div
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="rounded-full p-2 mr-4 justify-self-end"
      >
        {theme === "light" ? (
          <MoonIcon className="h-5 w-5 text-foreground" />
        ) : (
          <SunIcon className="h-5 w-5 text-foreground" />
        )}
      </div>
    </nav>
  );
};
