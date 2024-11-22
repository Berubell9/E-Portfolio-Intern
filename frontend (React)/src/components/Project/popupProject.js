import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function Popup({ show, onHide, project }) {
  if (!project) return null; 

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {project.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{project.detail}</p>
        <img src={project.imageMore} alt={project.name} style={{ width: '100%' }} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Popup;
