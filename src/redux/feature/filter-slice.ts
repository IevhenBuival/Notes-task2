import { createSlice } from "@reduxjs/toolkit";
import { FilterType } from "../../types/filter";

interface FilterState {
  filter: FilterType;
}

const initialState: FilterState = {
  filter: "ACTIVE",
};

const filterSlice = createSlice({
  name: "filter",
  initialState: initialState,
  reducers: {
    setAll(state) {
      state.filter = "ALL";
    },
    setActive(state) {
      state.filter = "ACTIVE";
    },
    setArchive(state) {
      state.filter = "ARCHIVE";
    },
  },
});

export const { setAll } = filterSlice.actions;
const filterReduser = filterSlice.reducer;
export default filterReduser;
