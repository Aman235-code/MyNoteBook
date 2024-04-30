import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];

  const [notes, setnotes] = useState(notesInitial);
  // get all Notes
  const getNotes = async () => {
    const res = await fetch(`${host}/api/notes/fetchAllNotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYyZmM1NDI4YThmMmNmZDdmNjZhZjhiIn0sImlhdCI6MTcxNDQwOTc1NH0.9snMRSVA276ZzvrUD4bOHOD4I1VNJ-9yVur75ZBLsh4",
      },
    });
    const json = await res.json();
    setnotes(json);
  };

  // Add a Note
  const addNote = async (title, description, tag) => {
    const res = await fetch(`${host}/api/notes/addNote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYyZmM1NDI4YThmMmNmZDdmNjZhZjhiIn0sImlhdCI6MTcxNDQwOTc1NH0.9snMRSVA276ZzvrUD4bOHOD4I1VNJ-9yVur75ZBLsh4",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await res.json();
    setnotes(notes.concat(json));
  };

  // Delete a Note
  const deleteNote = async (id) => {
    const res = await fetch(`${host}/api/notes/deleteNote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYyZmM1NDI4YThmMmNmZDdmNjZhZjhiIn0sImlhdCI6MTcxNDQwOTc1NH0.9snMRSVA276ZzvrUD4bOHOD4I1VNJ-9yVur75ZBLsh4",
      },
    });
    const json = await res.json();
    setnotes(notes.concat(json));
  };

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    const res = await fetch(`${host}/api/notes/updateNote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYyZmM1NDI4YThmMmNmZDdmNjZhZjhiIn0sImlhdCI6MTcxNDQwOTc1NH0.9snMRSVA276ZzvrUD4bOHOD4I1VNJ-9yVur75ZBLsh4",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await res.json();
    setnotes(notes.concat(json));
  };
  return (
    <NoteContext.Provider
      value={{ notes, setnotes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
