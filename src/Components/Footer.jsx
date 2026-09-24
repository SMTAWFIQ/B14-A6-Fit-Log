import Image from "next/image";
import React from "react";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center  container mx-auto py-3 px-5 mt-9 border-t border-base-200">
      <div className="flex items-center">
        <Image src={logo} width={20} height={20} alt="logo" />
        <a className="btn btn-ghost text-m font-oswald px-1">FITLOG</a>
      </div>
      <p className="text-[10px]">© 2026 FitLog — Workout Library. Train hard, log honest.</p>
    </footer>
  );
};

export default Footer;
