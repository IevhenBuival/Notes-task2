import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INote } from "../../types/notes";
import { notes } from "../store/data/data";

export const searchIndexById = (notes: INote[], searchKey: string) => {
  const index = notes.findIndex((el) => {
    if (el.id === searchKey) return true;
    return false;
  });
  return index;
};

interface NotesState {
  notes: INote[];
}

const initialState: NotesState = {
  notes: notes,
};

const notesSlice = createSlice({
  name: "notes",
  initialState: initialState,
  reducers: {
    addNote(state, action: PayloadAction<INote>) {
      state.notes.push(action.payload);
    },
    editNote(state, action: PayloadAction<INote>) {
      state.notes.some((el) => {
        if (action.payload.id === el.id) {
          el.title = action.payload.title;
          el.category = action.payload.category;
          el.content = action.payload.content;
          el.dates = action.payload.dates;
          return true;
        }
        return false;
      });
    },
    removeNote(state, action: PayloadAction<INote>) {
      state.notes.splice(
        searchIndexById([...state.notes], action.payload.id),
        1
      );
    },
    changeArchived(state, action: PayloadAction<INote>) {
      const index = searchIndexById([...state.notes], action.payload.id);
      state.notes[index].archived = !state.notes[index].archived;
    },
  },
});

export const { addNote, editNote, removeNote, changeArchived } =
  notesSlice.actions;
const notesReduser = notesSlice.reducer;
export default notesReduser;
