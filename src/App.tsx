import './App.css';
import React from 'react';
import Modal from './components/Modal/Modal.tsx';

const App = () => {
  const [showModal, setShowModal] = React.useState(false);
  const cancel = () => {
    setShowModal(false);
  };

  return (
    <>
      <button
        className="w-100 btn btn-primary"
        onClick={() => setShowModal(true)}
      >
        Open Modal
      </button>
      <Modal show={showModal} title="Some kinda modal title" onClose={cancel}>
        <div className="modal-body">
          <p>This is modal content</p>
        </div>
      </Modal>
    </>
  );
};

export default App;
