import React from 'react';

interface ModalProps extends React.PropsWithChildren {
  show: boolean;
  title: string;
  onClose: React.MouseEventHandler;
}

const Modal: React.FC<ModalProps> = ({ show, title, onClose, children }) => {
  return (
    <>
      <div
        className="modal-backdrop show"
        style={{ display: show ? 'block' : 'none' }}
      />
      <div
        className="modal show"
        style={{ display: show ? 'block' : 'none' }}
        onClick={onClose}
      >
        <div
          className="modal-dialog"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="modal-content">
            <div className="modal-header d-flex align-items-center justify-content-between">
              <h1 className="modal-tittle fs-5 d-inline-block">{title}</h1>
              <button
                type="button"
                className="btn btn-outline-dark"
                onClick={onClose}
              >
                X
              </button>
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
