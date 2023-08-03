import filterReduser from "../feature/filter-slice";
import { configureStore } from "@reduxjs/toolkit";
import notesReduser from "../feature/notes-slice";

export const store = configureStore({
  reducer: { filter: filterReduser, notes: notesReduser },
});

export type StoreDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
