import React, { FC, useRef, useState, useEffect } from "react";
import "./style.css";

import defaultCloseIcon from "../assets/drawer/close.svg";
import { useCallback } from "react";

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
  disableBackdropClick,
  children,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const [openControll, setOpenControll] = useState(false);

  useEffect(() => {
    if (open) {
      setOpenControll(true);
    } else {
      setTimeout(() => setOpenControll(false), 800);
    }
  }, [open]);

  const cancel = useCallback(
    (event: any) => {
      setResponse(false);
      onClose(event);
    },
    [onClose, setResponse]
  );

  const confirm = useCallback(
    (event: any) => {
      setResponse(true);
      onClose(event);
    },
    [onClose, setResponse]
  );

  const hide = useCallback(
    (event: Event) => {
      const node = modalRef.current;
      if (
        node &&
        event.target !== node &&
        !node.contains(event.target as HTMLElement)
      ) {
        cancel(event);
      }
    },
    [cancel]
  );

  useEffect(() => {
    if (open && !disableBackdropClick) {
      document.addEventListener("click", hide);
    }

    return () => document.removeEventListener("click", hide);
  }, [hide, open, disableBackdropClick]);

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
        <div className="modal-content" style={contentStyle}>
          {children}
        </div>
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
          <div
            className="modal-container modal-open"
            style={containerStyle}
            ref={modalRef}
          >
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
