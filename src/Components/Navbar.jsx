import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link href="/">Workouts</Link>
      </li>
      <li>
        <Link href="/my-plan">My Plan</Link>
      </li>
    </>
  );
  return (
    <nav className="shadow-sm border-b border-base-200">

    <div className="navbar sticky top-0 z-50 bg-base-100  container mx-auto py-3 px-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center">
          <Image src={logo} width={25} height={40} alt="logo"></Image>
          <a className="btn btn-ghost text-xl font-oswald px-1">FITLOG</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <Link href="/plan" className="btn">
          Plan
        </Link>
        <Link href="/plan" className="btn">
          Saved
        </Link>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
