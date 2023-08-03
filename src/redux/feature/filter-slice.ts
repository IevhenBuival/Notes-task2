import { PayloadAction, createSlice } from "@reduxjs/toolkit";
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
    setFilter(state, action: PayloadAction<FilterType>) {
      state.filter = action.payload;
    },
    setActive(state) {
      state.filter = "ACTIVE";
    },
  },
});

export const { setFilter, setActive } = filterSlice.actions;
const filterReduser = filterSlice.reducer;
export default filterReduser;
