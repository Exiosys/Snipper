import React from "react";
import ButtonPrimary from "./ButtonPrimary";
import Header from "./Header";
import Snippet from "../assets/Snippet Image.png";
import "./TopLanding.css";

export default function TopLanding() {
  return (
    <div className="top-landing">
      <Header />
      <div className="main-content">
        <div className="titles-content">
          <h1>Gorgeous Code Snippets</h1>
          <p>
            With Snipper, create fully customizable code snippets in a metter of
            seconds right from your browser.
          </p>
          <ButtonPrimary
            className="mt-3 mb-1"
            label="Get started"
            subLabel="- it's free"
          />
          <p>No credit card required.</p>
        </div>
        <img className="snippet-image" src={Snippet} alt="snippet" />
      </div>
    </div>
  );
}
