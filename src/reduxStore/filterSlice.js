import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filter: {
      DropdownEmployee: { isOpen: false, value: "gl;dfkjgdfil"},
      DropdownCalls: false,
      DropdownErrors: false,
      DropdownScores: false,
      DropdownPeriod: false,
      DropdownOrgs: false,
    },
  },
  reducers: {
    dropHandler(state, action) {
      state.filter.DropdownEmployee = !state.filter.DropdownEmployee;
    },
    dropCalls(state, action) {
      state.filter.DropdownCalls = !state.filter.DropdownCalls;
    },
    dropErrors(state, action) {
      state.filter.DropdownErrors = !state.filter.DropdownErrors;
    },
    dropScores(state, action) {
      state.filter.DropdownScores = !state.filter.DropdownScores;
    },
    dropPeriod(state, action) {
      state.filter.DropdownPeriod = !state.filter.DropdownPeriod;
    },
    dropOrgs(state, action) {
      state.filter.DropdownOrgs = !state.filter.DropdownOrgs;
    },
  },
});
export const {
  dropHandler,
  dropCalls,
  dropErrors,
  dropScores,
  dropPeriod,
  dropOrgs,
} = filterSlice.actions;
export default filterSlice.reducer;
