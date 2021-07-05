import React, { FC, ReactNode, CSSProperties } from "react";
import "./style.css";

import { nanoid } from "nanoid";

interface CarrosselItemProps {
  children: ReactNode;
  style?: CSSProperties;
}
const CarrosselItem: FC<CarrosselItemProps> = ({ children, style }) => {
  return (
    <div key={nanoid()} className="carrossel-item" style={style}>
      {children}
    </div>
  );
};

export default CarrosselItem;
