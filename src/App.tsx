import './App.css';
import React from 'react';
import Modal from './components/Modal/Modal.tsx';
import Alert from './components/Alert/Alert.tsx';

const App = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [closeAlert, setCloseAlert] = React.useState(true);
  const cancel = () => {
    setShowModal(false);
  };
  return (
    <>
      <button
        className="w-50 btn btn-primary"
        onClick={() => setShowModal(true)}
      >
        Open Modal
      </button>
      <Modal show={showModal} title="Some kinda modal title" onClose={cancel}>
        <div className="modal-body">
          <p>This is modal content</p>
        </div>
      </Modal>

      {closeAlert ? (
        <Alert type="warning" onDismiss={() => setCloseAlert(false)}>
          This is a warning type alert
        </Alert>
      ) : (
        <></>
      )}

      <Alert type="success">This is a success type alert</Alert>
    </>
  );
};

export default App;
