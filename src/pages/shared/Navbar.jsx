import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Tooltip } from "react-tooltip";
import logo from "../../assets/icon/logo.png";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/all-volunteer-need-posts"}>
          All volunteer Need posts
        </NavLink>
      </li>
      <li>
        <div className="dropdown dropdown-bottom">
          <div
            tabIndex={0}
            role="button"
            aria-expanded={isDropdownOpen}
            onClick={toggleDropdown}
          >
            My Profile
          </div>
          <ul
            tabIndex={0}
            className={`dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow text-gray-700 ${
              isDropdownOpen ? "block" : "hidden"
            }`}
          >
            <li>
              <Link to="/add-volunteer-post">Add Volunteer need Post</Link>
            </li>
            <li>
              <Link to="/manage-my-posts">Manage My Posts </Link>
            </li>
          </ul>
        </div>
      </li>
    </>
  );

  const handleLogOut = () => {
    logOut();
  };

  return (
    <div className="navbar bg-[#275C87] md:text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden text-white"
          >
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
        <Link to={"/"} className="flex items-center cursor-pointer">
          <img src={logo} alt="" className="w-12 hidden md:block" />
          <h2 className="text-2xl hidden md:block">Volunteer Wave</h2>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user && user?.email ? (
          <div className="flex items-center gap-3">
            <div className="relative flex flex-col items-center">
              <img
                src={user.photoURL}
                className="w-10 h-10 rounded-full"
                alt="User Avatar"
                data-tooltip-id="user-tooltip"
                data-tooltip-place="left"
              />
              <Tooltip id="user-tooltip" content={user.displayName || "User"} />
            </div>
            <Link onClick={handleLogOut} className="btn btn-outline text-white">
              Log Out
            </Link>
          </div>
        ) : (
          <Link to={"/login"} className="btn btn-outline text-white">
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
