import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "requests",
  initialState: [],
  reducers: {
    addRequests: (state, action) => action.payload,
    removeRequests : (state, action)=>{
        const newRequests = state.filter(user => user._id !== action.payload);
        return newRequests;
    }
  },
});

export const { addRequests, removeRequests } = requestSlice.actions;
export default requestSlice.reducer;