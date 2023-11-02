import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
      filter: { DropdownEmployee: false, },
  },
  reducers: {
      dropHandler(state, action) {
         state.filter.DropdownEmployee = !state.filter.DropdownEmployee;
    },
  },
});
export const { dropHandler } = filterSlice.actions;
export default filterSlice.reducer;
