import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  notes: localStorage.getItem("notes")
    ? JSON.parse(localStorage.getItem("notes"))
    : [],
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addToNotes: (state, action) => {
      const note = action.payload;
      state.notes.push(note);
      localStorage.setItem("notes", JSON.stringify(state.notes));
      toast.success("Note added successfully!");
       
    },
    updateToNotes: (state, action) => {
        const note = action.payload;
        const index = state.notes.findIndex((item) => item.id === note.id);
        if (index >= 0){
            state.notes[index] = note;
            localStorage.setItem("notes", JSON.stringify(state.notes));
            toast.success("Note updated successfully!");
        }
    },
    resetAllNotes: (state, action) => {
        action
        state.notes = [];
        localStorage.setItem("notes", JSON.stringify(state.notes));
    },
    removeFromNotes: (state, action) => {
        const note = action.payload;
        const index = state.notes.findIndex((item) => item.id === note.id);
        if (index >= 0){
            state.notes.splice(index, 1);
            localStorage.setItem("notes", JSON.stringify(state.notes));
            toast.success("Note deleted successfully!");
        }
    },
  },
});

export const { addToNotes, updateToNotes, resetAllNotes, removeFromNotes, updateAllNotes } =
  notesSlice.actions;

export default notesSlice.reducer;
