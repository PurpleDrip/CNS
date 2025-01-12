import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    role: localStorage.getItem("role") || null,
    isRegistered: true,
    // localStorage.getItem("isRegistered") === "false"
    isValid: localStorage.getItem("isValid") === "false",
  },
  reducers: {
    setUserRole: (state, action) => {
      state.role = action.payload;
      localStorage.setItem("role", action.payload);
    },
    hasRegistered: (state) => {
      state.isRegistered = true;
      localStorage.setItem("isRegistered", true);
    },
    hasValidated: (state) => {
      state.isValid = true;
      localStorage.setItem("isValid", true);
    },
  },
});

export const { setUserRole, hasRegistered, hasValidated } = userSlice.actions;
export default userSlice.reducer;
