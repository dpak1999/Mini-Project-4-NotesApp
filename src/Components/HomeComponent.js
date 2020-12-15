import React, { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import ModalComponent from "./ModalComponent";
import "../App.css";

const HomeComponent = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <h1 className="App">Your notes</h1>
      <div className="btn-position">
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Add Task
        </Button>
      </div>
      <ModalComponent show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default HomeComponent;
