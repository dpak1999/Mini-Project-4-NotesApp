import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import FormComponent from "./FormComponent";
import NotesList from "./NotesList";

const ModalComponent = (props) => {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    const newNote = [note, ...notes];
    setNotes(newNote);
  };
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
          <FormComponent onSubmit={addNote} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
      <NotesList notes={notes} />
    </div>
  );
};

export default ModalComponent;
