import React, { FC } from "react";

const ListItem: FC<ListItemProps> = ({ children, onClick }) => {
  return <span onClick={onClick}>{children}</span>;
};

export default ListItem;
