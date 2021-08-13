import React, { FC } from "react";
import "./style.css";

const CarrosselItem: FC<CarrosselItemProps> = ({ children, style }) => {
  return (
    <div className="carrossel-item" style={style}>
      {children}
    </div>
  );
};

export default CarrosselItem;
