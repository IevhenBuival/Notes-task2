import filterReduser from "../feature/filter-slice";
import { configureStore } from "@reduxjs/toolkit";
import notesReduser from "../feature/notes-slice";
import totalReduser from "../feature/total-slice";

export const store = configureStore({
  reducer: { filter: filterReduser, notes: notesReduser, total: totalReduser },
});

export type StoreDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
