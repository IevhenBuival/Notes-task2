import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoryType, INote } from "../../types/notes";
import { notes } from "../store/data/data";
import { INoteTotal, ITotal } from "../../types/total";

export const searchIndexById = (notes: INote[], searchKey: string) => {
  const index = notes.findIndex((el) => {
    if (el.id === searchKey) return true;
    return false;
  });
  return index;
};

interface NotesState {
  notes: INote[];
  total: ITotal[];
}

const initialState: NotesState = {
  notes: notes,
  total: recalcTotal(notes),
};

function recalcTotal(notes: INote[]) {
  const CategorySet = new Set<CategoryType>();
  notes.forEach((element) => {
    CategorySet.add(element.category);
  });
  const total: ITotal[] = [];
  for (let item of CategorySet) {
    const filtered = notes.filter((el) => el.category === item);
    const activeCount = filtered.reduce((accumulator, currentValue) => {
      if (!currentValue.archived) return accumulator + 1;
      return accumulator;
    }, 0);
    const archivedCount = filtered.reduce((accumulator, currentValue) => {
      if (currentValue.archived) return accumulator + 1;
      return accumulator;
    }, 0);
    total.push({
      id: item,
      category: item,
      active: activeCount,
      archived: archivedCount,
    });
  }
  return total;
}

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
    recalcTotalNote(state) {
      state.total = [...recalcTotal(state.notes)];
    },
  },
});

export const {
  addNote,
  editNote,
  removeNote,
  changeArchived,
  recalcTotalNote,
} = notesSlice.actions;
const notesReduser = notesSlice.reducer;
export default notesReduser;
