import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    search: "",
  },
  reducers: {
    changeFilter: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export const selectFilter = (state) => state.filters.search; // 'filters' burada olmalı
export default filterSlice.reducer;
