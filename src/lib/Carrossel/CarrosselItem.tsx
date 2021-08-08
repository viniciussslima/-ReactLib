import React, { FC } from "react";
import "./style.css";

import { nanoid } from "nanoid";

const CarrosselItem: FC<CarrosselItemProps> = ({ children, style }) => {
  return (
    <div key={nanoid()} className="carrossel-item" style={style}>
      {children}
    </div>
  );
};

export default CarrosselItem;
