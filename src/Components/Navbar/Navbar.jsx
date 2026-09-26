import Image from "next/image";

import logo from "../../../assets/logo.png";

import PlanButton from "./PlanButton";
import SaveButton from "./SaveButton";
import WorkoutLink from "./WorkoutLink";
import MyPlanLink from "./MyPlanLink";
import Link from "next/link";

const Navbar = () => {
  const links = (
    <>
      <WorkoutLink />
      <MyPlanLink />
    </>
  );

  return (
    <nav className="sticky top-0 z-50 bg-base-100 shadow-sm border-b border-base-200">
      <div className="navbar container mx-auto py-3 px-5">
        {/* Left - Hamburger / Logo */}
        <div className="flex-1">
          {/* Hamburger */}
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                aria-label="Menu"
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

            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>

          {/* Logo - Large device */}
          <Link href="/">
            <div className="hidden lg:flex items-center">
            <Image src={logo} width={25} height={40} alt="logo" />

            <span className="btn btn-ghost text-xl font-oswald px-1">FITLOG</span>
          </div>
          </Link>
        </div>

        {/* Logo - Mobile & Tablet */}

        <Link href="/">
          <div className="flex lg:hidden items-center">
            <Image src={logo} width={25} height={40} alt="logo" />

            <span className="btn btn-ghost text-xl font-oswald px-1">FITLOG</span>
          </div>
        </Link>

        {/* Right - Buttons */}
        <div className="flex-1 flex justify-end items-center gap-2">
          <PlanButton />
          <SaveButton />
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
