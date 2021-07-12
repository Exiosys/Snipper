import React from "react";
import Logo from "../assets/Logo.svg";
import SearchIcon from "../assets/Search Icon.svg";
import BurgerMenuIcon from "../assets/Hamburger Menu.svg";
import ButtonPrimary from "./ButtonPrimary";
import "./Header.css";

export default function Header() {
  return (
    <header className="d-flex align-items-center justify-content-between">
      <img className="logo" src={Logo} alt="Snipper" />
      <div className="d-flex align-items-center header-content">
        <img
          alt="search"
          className="search-icon cursor-pointer"
          src={SearchIcon}
        />
        <p className="sign-in cursor-pointer">Sign In</p>
        <ButtonPrimary label="Get started" subLabel="- it's free" />
      </div>

      <img
        className="burger-menu cursor-pointer"
        src={BurgerMenuIcon}
        alt="menu"
      />
    </header>
  );
}
