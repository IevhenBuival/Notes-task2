import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITotal } from "../../types/total";
import { CategoryType, INote } from "../../types/notes";

interface TotalState {
  total: ITotal[];
}

const initialState: TotalState = {
  total: [],
};

const totalSlice = createSlice({
  name: "total",
  initialState: initialState,
  reducers: {
    recalcTotal(state, action: PayloadAction<INote[]>) {
      const notes = action.payload;
      const CategorySet = new Set<CategoryType>();
      notes.forEach((element) => {
        CategorySet.add(element.category);
      });
      state.total = [];
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
        state.total.push({
          id: item,
          category: item,
          active: activeCount,
          archived: archivedCount,
        });
      }
    },
  },
});

export const { recalcTotal } = totalSlice.actions;
const totalReduser = totalSlice.reducer;
export default totalReduser;
