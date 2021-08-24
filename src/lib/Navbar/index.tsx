import React, { FC } from "react";
import "./style.css";

import { NavbarProps } from "viniciussslima";

const Navbar: FC<NavbarProps> = ({ style, children }) => (
  <header className="navbar" style={style}>
    {children}
  </header>
);

export default Navbar;
