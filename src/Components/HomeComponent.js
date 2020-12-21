/** @format */

import React, { useState, useEffect } from "react";
import { Button, Container, FormControl } from "react-bootstrap";
import ModalComponent from "./ModalComponent";
import "../App.css";
import NotesList from "./NotesList";
import SearchResults from "./SearchResults";

const HomeComponent = () => {
  const [modalShow, setModalShow] = useState(false);
  const [notes, setNotes] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [results, setResults] = useState([]);

  const addNote = (note) => {
    const newNote = [note, ...notes];
    setNotes(newNote);

    localStorage.setItem("note", JSON.stringify(newNote));
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("note"));
    if (data) {
      setNotes(data);

      const result = data.filter(({ title }) =>
        title.toLowerCase().includes(searchItem)
      );
      setResults(result);
    }
  }, [searchItem]);

  return (
    <div>
      <h1 className="App">Notes app</h1>
      <Container>
        <FormControl
          type="text"
          placeholder="Search Notes"
          className="mr-sm-2"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />
      </Container>
      <div className="btn-position">
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Add Task
        </Button>
      </div>
      <ModalComponent
        show={modalShow}
        onHide={() => setModalShow(false)}
        addNote={addNote}
      />
      {searchItem ? (
        <SearchResults results={results} />
      ) : (
        <NotesList notes={notes} />
      )}
    </div>
  );
};

export default HomeComponent;
