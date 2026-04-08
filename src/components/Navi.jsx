import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

function Navi() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`header-nav ${isSticky ? "is-sticky" : ""}`}>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Top
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        About
      </NavLink>
      <NavLink
        to="/works"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Works
      </NavLink>
    </nav>
  );
}

export default Navi;
