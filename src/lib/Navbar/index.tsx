import React, { FC } from "react";
import "./style.css";

import { NavbarProps } from "viniciussslima";

/**
 *
 * @param style CSSProperties
 * @param children ReactNode
 *
 */

const Navbar: FC<NavbarProps> = ({ style, children }) => (
  <header className="navbar" style={style}>
    {children}
  </header>
);

export default Navbar;
