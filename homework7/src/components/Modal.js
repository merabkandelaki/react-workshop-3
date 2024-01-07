import React, { useEffect } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.body;

const Modal = ({ isOpen, children }) => {
  const el = document.createElement("div");

  useEffect(() => {
    modalRoot.appendChild(el);

    return () => {
      modalRoot.removeChild(el);
    };
  }, [el]);

  return isOpen
    ? createPortal(
        <div className="modal-overlay">
          <div className="modal-content">{children}</div>
        </div>,
        el
      )
    : null;
};

export default Modal;
