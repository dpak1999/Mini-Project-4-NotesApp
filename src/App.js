import "./App.css";
import React from "react";
import HomeComponent from "./Components/HomeComponent";
import NotesList from "./Components/NotesList";

function App() {
  return (
    <div>
      <HomeComponent />
      <NotesList />
    </div>
  );
}

export default App;
