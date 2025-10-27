import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      "px-3 py-2 rounded-md text-sm font-medium transition " +
      (isActive
        ? "text-orange-400 underline decoration-yellow-400"
        : "text-gray-200 hover:text-orange-400")
    }
  >
    {children}
  </NavLink>
);

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-40 bg-black/80 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <Logo />
          <div>
            <div className="text-lg font-bold tracking-widest">FAMEJET STAR</div>
            <div className="text-xs text-gray-300 uppercase -mt-1">Entertainment</div>
          </div>
        </div>

        <nav className="flex items-center gap-2">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/social">Social</NavItem>
          <NavItem to="/resources">Resources</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </nav>
      </div>
    </header>
  );
}
