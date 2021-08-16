import React, { FC } from "react";
import "./style.css";

/**
 *
 * @param style (optional) CSSProperties
 * @param children ReactNode
 *
 */

const CarrosselItem: FC<CarrosselItemProps> = ({ style, children }) => {
  return (
    <div className="carrossel-item" style={style}>
      {children}
    </div>
  );
};

export default CarrosselItem;
