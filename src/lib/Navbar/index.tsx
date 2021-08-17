import React, { FC } from "react";
import "./style.css";

/**
 *
 * @param style CSSProperties
 * @param children ReactNode
 *
 */

const Navbar: FC<navbarProps> = ({ style, children }) => (
  <header className="navbar" style={style}>
    {children}
  </header>
);

export default Navbar;
