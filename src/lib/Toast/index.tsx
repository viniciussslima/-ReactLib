import React, { FC, useMemo, useEffect } from "react";
import "./style.css";

import { ToastProps } from "viniciussslima";

import infoIcon from "../assets/toast/info.svg";
import warningIcon from "../assets/toast/warning.svg";
import errorIcon from "../assets/toast/error.svg";
import closeIcon from "../assets/toast/close.svg";

const Toast: FC<ToastProps> = ({ show, onHide, text, type, time = 5000 }) => {
  const icon: string = useMemo(() => {
    switch (type) {
      case "info":
        return infoIcon;
      case "warning":
        return warningIcon;
      case "error":
        return errorIcon;
      default:
        return infoIcon;
    }
  }, [type]);

  const backgroundColor: string = useMemo(() => {
    switch (type) {
      case "info":
        return "#2196F3";
      case "warning":
        return "#FF9800";
      case "error":
        return "#F44336";
      default:
        return "#2196F3";
    }
  }, [type]);

  useEffect(() => {
    const timeout = setTimeout(() => onHide(), time);
    return () => clearTimeout(timeout);
  }, [onHide, time]);

  return (
    <>
      {show && (
        <div className="toast" style={{ backgroundColor }}>
          <img className="toast-icon" src={icon} alt="" />
          <span>{text}</span>
          <img
            className="toast-close"
            src={closeIcon}
            alt=""
            onClick={onHide}
          />
        </div>
      )}
    </>
  );
};

export default Toast;
