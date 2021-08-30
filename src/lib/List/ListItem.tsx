import React, { FC } from "react";

import { ListItemProps } from "viniciussslima";

const ListItem: FC<ListItemProps> = ({ children, onClick }) => {
  return (
    <span onClick={onClick} style={{ cursor: onClick ? "pointer" : "default" }}>
      {children}
    </span>
  );
};

export default ListItem;
