import React, { FC } from "react";
import "./style.css";

import { MenuItemProps } from "viniciussslima";
import { nanoid } from "nanoid";

const MenuItem: FC<MenuItemProps> = ({ children, onClick }) => {
  return (
    <li key={nanoid()} onClick={onClick}>
      {children}
    </li>
  );
};

export default MenuItem;
