import React, { FC } from "react";

import { ListItemProps } from "viniciussslima";

/**
 *
 * @param children ReactNode
 * @param onClick () => void
 *
 */

const ListItem: FC<ListItemProps> = ({ children, onClick }) => {
  return <span onClick={onClick}>{children}</span>;
};

export default ListItem;
