import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "662fd6b74d50fb91a5e1f3d4",
      user: "662fc5428a8f2cfd7f66af8b",
      title: "Bhalu Boy",
      description: "Please wake up early",
      tag: "Personal",
      date: "2024-04-29T17:19:51.326Z",
      __v: 0,
    },
    {
      _id: "662fd6b74d50fb91a5e563yd4",
      user: "662fg5628a8f2cfd7f66af8b",
      title: "Bhalu Boy Yes Bhalu",
      description: "Please wake up early and die",
      tag: "Professional",
      date: "2024-04-29T17:19:51.326Z",
      __v: 0,
    },
    {
      _id: "662fd6b74d50fb91a5e563yd4",
      user: "662fg5628a8f2cfd7f66af8b",
      title: "Bhalu Boy Yes Bhalu",
      description: "Please wake up early and die",
      tag: "Professional",
      date: "2024-04-29T17:19:51.326Z",
      __v: 0,
    },
    {
      _id: "662fd6b74d50fb91a5e563yd4",
      user: "662fg5628a8f2cfd7f66af8b",
      title: "Bhalu Boy Yes Bhalu",
      description: "Please wake up early and die",
      tag: "Professional",
      date: "2024-04-29T17:19:51.326Z",
      __v: 0,
    },
    {
      _id: "662fd6b74d50fb91a5e563yd4",
      user: "662fg5628a8f2cfd7f66af8b",
      title: "Bhalu Boy Yes Bhalu",
      description: "Please wake up early and die",
      tag: "Professional",
      date: "2024-04-29T17:19:51.326Z",
      __v: 0,
    },
    {
      _id: "662fd6b74d50fb91a5e563yd4",
      user: "662fg5628a8f2cfd7f66af8b",
      title: "Bhalu Boy Yes Bhalu",
      description: "Please wake up early and die",
      tag: "Professional",
      date: "2024-04-29T17:19:51.326Z",
      __v: 0,
    },
    {
      _id: "662fd6b74d50fb91a5e563yd4",
      user: "662fg5628a8f2cfd7f66af8b",
      title: "Bhalu Boy Yes Bhalu",
      description: "Please wake up early and die",
      tag: "Professional",
      date: "2024-04-29T17:19:51.326Z",
      __v: 0,
    },
    {
      _id: "662fd6b74d50fb91a5e563yd4",
      user: "662fg5628a8f2cfd7f66af8b",
      title: "Bhalu Boy Yes Bhalu",
      description: "Please wake up early and die",
      tag: "Professional",
      date: "2024-04-29T17:19:51.326Z",
      __v: 0,
    },
    {
      _id: "662fd6b74d50fb91a5e563yd4",
      user: "662fg5628a8f2cfd7f66af8b",
      title: "Bhalu Boy Yes Bhalu",
      description: "Please wake up early and die",
      tag: "Professional",
      date: "2024-04-29T17:19:51.326Z",
      __v: 0,
    },
    {
      _id: "662fd6b74d50fb91a5e563yd4",
      user: "662fg5628a8f2cfd7f66af8b",
      title: "Bhalu Boy Yes Bhalu",
      description: "Please wake up early and die",
      tag: "Professional",
      date: "2024-04-29T17:19:51.326Z",
      __v: 0,
    },
    {
      _id: "662fd6b74d50fb91a5e563yd4",
      user: "662fg5628a8f2cfd7f66af8b",
      title: "Bhalu Boy Yes Bhalu",
      description: "Please wake up early and die",
      tag: "Professional",
      date: "2024-04-29T17:19:51.326Z",
      __v: 0,
    },
    {
      _id: "662fd6b74d50fb91a5e563yd4",
      user: "662fg5628a8f2cfd7f66af8b",
      title: "Bhalu Boy Yes Bhalu",
      description: "Please wake up early and die",
      tag: "Professional",
      date: "2024-04-29T17:19:51.326Z",
      __v: 0,
    },
  ];

  const [notes, setnotes] = useState(notesInitial);
  return (
    <NoteContext.Provider value={{ notes, setnotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
