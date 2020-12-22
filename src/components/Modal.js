import React, { createRef, useState, useEffect } from "react";
import { ReactSVG } from "react-svg";
import close from "../assets/img/cancel.svg";
// Styles
import "../scss/modal.scss";

function Modal(props) {
  const [show, setShow] = useState(props.show);

  useEffect(() => {
    if (show !== props.show) {
      setShow(props.show);
    }
  }, [props.show]);

  const hide = () => {
    setShow(false);
    props.onClose();
  };

  return (
    <>
      <div className={`custom-modal ${props.show ? "open" : ""}`} tabIndex="-1">
        <div className="modal-overlay"></div>
        <div className="modal-content">
          <div className="modal-body custom-modal-body">
            {show && props.children}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-link" onClick={hide}>
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
