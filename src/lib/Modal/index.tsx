import React, { FC, useState, useEffect } from "react";
import "./style.css";

import defaultCloseIcon from "../assets/drawer/close.svg";

const Modal: FC<ModalProps> = ({
  open,
  onClose,
  containerStyle,
  contentStyle,
  closeButton = true,
  closeIcon = defaultCloseIcon,
  closeIconStyle,
  setResponse,
  title,
  titleStyle,
  cancelButtonStyle,
  okButtonStyle,
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

  const cancel = (event: any) => {
    setResponse(false);
    onClose(event);
  };

  const confirm = (event: any) => {
    setResponse(true);
    onClose(event);
  };

  const renderContent = () => {
    return (
      <>
        <div className="modal-header">
          {closeButton && (
            <img
              className="modal-close-icon"
              style={closeIconStyle}
              src={closeIcon}
              alt="X button to close the modal"
              onClick={cancel}
            />
          )}
          <span style={titleStyle}>{title}</span>
        </div>
        <hr />

        <div className="modal-content" style={contentStyle}>
          {children}
        </div>
        <hr />
        <div className="modal-buttons" style={contentStyle}>
          <button
            className="viniciussslima-button modal-button modal-button-cancel"
            onClick={cancel}
            style={cancelButtonStyle}
          >
            Cancel
          </button>
          <button
            className="viniciussslima-button modal-button modal-button-ok"
            onClick={confirm}
            style={okButtonStyle}
          >
            Ok
          </button>
        </div>
      </>
    );
  };
  return (
    <>
      {openControll && open && (
        <div className="modal-background">
          <div className="modal-container modal-open" style={containerStyle}>
            {renderContent()}
          </div>
        </div>
      )}
      {openControll && !open && (
        <div className="modal-background">
          <div className="modal-container modal-close" style={containerStyle}>
            {renderContent()}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
