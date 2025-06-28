import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

function Navbar() {
  const { isPending, logout } = useLogout();
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#002F2F]">
      <div className="navbar main-container flex justify-between items-center py-4 relative">
        <div className="navbar-start">
          <Link to="/">
            <img src="./images/Logo.png" alt="Logo" className="h-[60px]" />
          </Link>
        </div>

        <div className="navbar-center hidden md:flex items-center gap-[13px]">
          <Link to="/">Bosh sahifa</Link>
          <Link to="/">Biz haqimizda</Link>
          <Link to="/">Manzillar</Link>
          <Link to="/">Dunyo bo’ylab sayohat</Link>
          <Link to="/">O’zbekiston bo’ylab sayohat</Link>
          <Link to="/admin">Admin</Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="text-white text-3xl focus:outline-none"
          >
            ☰
          </button>
        </div>

        <div className="navbar-end hidden ml-7 md:block">
          <button
            onClick={logout}
            disabled={isPending}
            className="btn btn-secondary btn-outline text-white font-bold"
          >
            {isPending ? "Loading" : "Logout"}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden flex flex-col items-start gap-4 px-4 pb-4">
          <Link onClick={() => setOpen(false)}>Bosh sahifa</Link>
          <Link onClick={() => setOpen(false)}>Biz haqimizda</Link>
          <Link onClick={() => setOpen(false)}>Manzillar</Link>
          <Link onClick={() => setOpen(false)}>Dunyo bo’ylab sayohat</Link>
          <Link to="/admin">Admin</Link>

          <Link onClick={() => setOpen(false)}>
            O’zbekiston bo’ylab sayohat
          </Link>
          <button
            onClick={logout}
            disabled={isPending}
            className="btn btn-secondary btn-outline text-white font-bold w-full"
          >
            {isPending ? "Loading" : "Logout"}
          </button>
        </div>
      )}
    </header>
  );
}

export default Navbar;
