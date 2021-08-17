import React, { FC, useRef, useState, useCallback, useEffect } from "react";
import "./style.css";

/**
 * @param message string
 * @params children ReactNode
 *
 */

const Tooltip: FC<TooltipProps> = ({ message, children }) => {
  const ref = useRef<HTMLDivElement>(null);

  const [show, setShow] = useState(false);

  const mouseover = useCallback(() => {
    setShow(true);
  }, []);

  const mouseout = useCallback(() => {
    setShow(false);
  }, []);

  useEffect(() => {
    const { current } = ref;
    if (current) {
      current.addEventListener("mouseover", mouseover);
      current.addEventListener("mouseout", mouseout);
    }

    return () => {
      if (current) {
        current.removeEventListener("mouseover", mouseover);
        current.removeEventListener("mouseout", mouseout);
      }
    };
  }, [mouseout, mouseover]);

  return (
    <div className="tooltip-container">
      {show && <span className="tooltip-message">{message}</span>}
      <div ref={ref}>{children}</div>
    </div>
  );
};

export default Tooltip;
