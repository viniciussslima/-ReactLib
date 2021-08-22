import React, { FC } from "react";
import "./style.css";

import { MenuItemProps } from "viniciussslima";
import { nanoid } from "nanoid";

/**
 *
 * @param children ReactNode
 * @param onClick () => void
 *
 */

const MenuItem: FC<MenuItemProps> = ({ children, onClick }) => {
  return (
    <li key={nanoid()} onClick={onClick}>
      {children}
    </li>
  );
};

export default MenuItem;
