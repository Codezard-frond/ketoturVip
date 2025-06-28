import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

function Navbar() {
  const { isPending, logout } = useLogout();
  return (
    <header className="bg-[#002F2F]">
      <div className="navbar  main-container">
        <div className="navbar-start">
          <Link to="/">
            <img src="./images/Logo.png" alt="Logo" />
          </Link>
        </div>
        <div className="navbar-center"></div>
        <div className="navbar-end">
          <button
            onClick={logout}
            disabled={isPending}
            className="btn btn-secondary btn-outline text-white font-bold"
          >
            {isPending ? "Loading" : "Logout"}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
