import React from "react";
import "./BottomLanding.css";
import ButtonPrimary from "./ButtonPrimary";
import CustomizableImage from "../assets/Customizable Image.png";

export default function BottomLanding() {
  return (
    <div className="d-flex bottom-landing justify-content-between main-content">
      <div className="mt-5">
        <h2>A fully customizable code snippet editor</h2>
        <p>
          Fully customize the color scheme of your code snippet, or use our own
          premade color schemes. Export your code snippets in JPG, PDF, PNG, or
          any of the other 10+ common extensions.
        </p>
        <ButtonPrimary
          className="mt-3 mb-1 w-fit-content"
          label="Get started"
          subLabel="- it's free"
        />
      </div>
      <img
        className="customizable-image"
        src={CustomizableImage}
        alt="customizable"
      />
    </div>
  );
}
