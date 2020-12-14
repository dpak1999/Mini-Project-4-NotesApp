import "./App.css";
import React, { useState } from "react";
import ModalComponent from "./Components/ModalComponent";
import { Button } from "react-bootstrap";

function App() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <h1>Task app</h1>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Show modal
      </Button>
      <ModalComponent show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}

export default App;
