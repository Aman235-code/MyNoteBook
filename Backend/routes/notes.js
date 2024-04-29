const express = require("express");
const router = express.Router();
const fetchUser = require("../middleware/fetchUser");
const Note = require("../models/Notes");

// ROUTE 1:  Get All the Notes using : GET "/api/notes/fetchAllNotes", Login Required
router.get("/fetchAllNotes", fetchUser, async (req, res) => {
  const notes = await Note.find({ user: req.user.id });
  res.json(notes);
});

// ROUTE 2:  Add a new note using : POST "/api/notes/addNote", Login Required
router.post("/addNote", fetchUser, async (req, res) => {
  try {
    const { title, description, tag } = req.body;
    const note = new Note({
      title,
      description,
      tag,
      user: req.user.id,
    });
    const savedNote = await note.save();
    res.json(savedNote);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Error occured");
  }
});

// ROUTE 3:  Update note using : PUT "/api/notes/updateNote", Login Required
router.put("/updateNote/:id", fetchUser, async (req, res) => {
  try {
    const { title, description, tag } = req.body;
    // Create a new note object
    const newNote = {};
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    if (tag) {
      newNote.tag = tag;
    }

    // Find note to be updated and update it
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not Found");
    }
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Unauthorized");
    }

    note = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json(note);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Error occured");
  }
});

// ROUTE 4:  DELETE an existing note using : DELETE "/api/notes/deleteNote", Login Required
router.delete("/deleteNote/:id", fetchUser, async (req, res) => {
  try {
    // Find note to be updated and delete it
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not Found");
    }

    // allow deletion only if the user owns this note
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Unauthorized");
    }

    note = await Note.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: "Note Has Been Deleted", note: note });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Error occured");
  }
});

module.exports = router;
