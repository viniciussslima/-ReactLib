import React, { FC, useState, useEffect } from "react";
import "./style.css";

import defaultCloseIcon from "../assets/drawer/close.svg";

const Drawer: FC<DrawerProps> = ({
  open,
  onClose,
  containerStyle,
  contentStyle,
  closeButton = true,
  closeIcon = defaultCloseIcon,
  closeIconStyle,
  children,
}) => {
  const [openControll, setOpenControll] = useState(false);

  useEffect(() => {
    if (open) {
      setOpenControll(true);
    } else {
      setTimeout(() => setOpenControll(false), 800);
    }
  }, [open]);

  const renderContent = () => {
    return (
      <>
        {closeButton && (
          <img
            className="drawer-close-icon"
            style={closeIconStyle}
            src={closeIcon}
            alt="X button to close the drawer"
            onClick={onClose}
          />
        )}
        <div className="drawer-content" style={contentStyle}>
          {children}
        </div>
      </>
    );
  };
  return (
    <>
      {openControll && open && (
        <div className="drawer-background">
          <div className="drawer-container drawer-open" style={containerStyle}>
            {renderContent()}
          </div>
        </div>
      )}
      {openControll && !open && (
        <div className="drawer-background">
          <div className="drawer-container drawer-close" style={containerStyle}>
            {renderContent()}
          </div>
        </div>
      )}
    </>
  );
};

export default Drawer;
