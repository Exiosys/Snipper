import React from "react";
import "./Footer.css";
import Logo from "../assets/Logo.svg";

export default function Footer() {
  return (
    <footer className="d-flex align-items-center justify-content-between main-content">
      <img src={Logo} alt="logo" />
      <div className="d-flex align-items-center">
        <a href="/#">Terms and Conditions</a>
        <a href="/#">Privacy Policy</a>
      </div>
    </footer>
  );
}
