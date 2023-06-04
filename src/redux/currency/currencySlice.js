const { createSlice } = require('@reduxjs/toolkit');

const currencySlice = createSlice({
  name: 'currency',
  initialState: 'UAH',
  reducers: {
    setCurrency(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setCurrency } = currencySlice.actions;
export const currencyReducer = currencySlice.reducer;
