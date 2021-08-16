import React, { FC } from "react";
import "./style.css";

const Navbar: FC<navbarProps> = ({ children }) => (
  <header className="navbar">{children}</header>
);

export default Navbar;
