import React from "react";
import logo from "../assets/logo.jpg";  
export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <img
        src={logo} /* put your provided image as public/logo.png */
        alt="FameJet Star logo"
        className="w-12 h-12 object-contain"
      />
    </div>
    );
}
