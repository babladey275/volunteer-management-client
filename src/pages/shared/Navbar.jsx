import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { signOut } from "firebase/auth";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/my-applications"}>All volunteer Need posts</NavLink>
      </li>
    </>
  );

  const handleLogOut = () => {
    logOut();
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost hover:bg-white">
          <h2 className="text-2xl hidden md:block">Volunteer Wave</h2>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user && user?.email ? (
          <div className="flex items-center gap-6">
            <div className="relative flex flex-col items-center">
              <img
                src={user.photoURL}
                className="w-8 h-8 rounded-full"
                alt="User Avatar"
                data-tooltip-id="user-tooltip"
                data-tooltip-place="left"
              />
              <Tooltip id="user-tooltip" content={user.displayName || "User"} />
            </div>
            <Link onClick={handleLogOut} className="btn btn-neutral">
              Log Out
            </Link>
          </div>
        ) : (
          <Link to={"/login"} className="btn btn-neutral">
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
