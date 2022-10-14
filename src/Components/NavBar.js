import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../Styles/Navbar.css";
import Reorder from "@mui/icons-material/Reorder";

function NavBar() {
  const [expandNavbar, setExpandNavBar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavBar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "closed"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavBar((prev) => !prev);
          }}
        >
          <Reorder />
        </button>
      </div>
      <div className="Links">
        <Link to="/">Home</Link>
        <Link to="/Projects">Projects</Link>
        <Link to="/Experience">Experience</Link>
      </div>
    </div>
  );
}

export default NavBar;
