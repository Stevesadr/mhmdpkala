const { createSlice } = require("@reduxjs/toolkit");
const INITIAL_STATE = [{ count: 0, name: "", price: 0 }];
const reducerSliceRedux = createSlice({
  name: "reducer",
  initialState: INITIAL_STATE,
  reducers: {
    addItemToCard(state, action) {
      state = [...state , action.payload];
      return state;
    },
  },
});
export const { addItemToCard } = reducerSliceRedux.actions;
export default reducerSliceRedux.reducer;
