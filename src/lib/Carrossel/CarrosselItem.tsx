import React, { FC } from "react";
import "./style.css";

import { CarrosselItemProps } from "viniciussslima";

const CarrosselItem: FC<CarrosselItemProps> = ({ style, children }) => {
  return (
    <div className="carrossel-item" style={style}>
      {children}
    </div>
  );
};

export default CarrosselItem;
