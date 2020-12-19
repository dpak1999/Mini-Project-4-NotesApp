/** @format */

import React from "react";
import { Modal, Button } from "react-bootstrap";
import FormComponent from "./FormComponent";

const ModalComponent = (props) => {
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add a task
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormComponent onSubmit={props.addNote} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalComponent;
