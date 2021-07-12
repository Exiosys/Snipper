import React from "react";
import "./ButtonPrimary.css";

export default function ButtonPrimary({ label, subLabel, className }) {
  return (
    <button className={`button-primary ${className}`}>
      {label} <span>{subLabel}</span>
    </button>
  );
}
