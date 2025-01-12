import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  encrypted: localStorage.getItem("encrypted") || "",
  iv: localStorage.getItem("iv") || "",
  key: localStorage.getItem("key") || "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setEncrypted: (state, action) => {
      state.encrypted = action.payload;
      localStorage.setItem("encrypted", state.encrypted);
    },
    setIv: (state, action) => {
      state.iv = action.payload;
      localStorage.setItem("iv", state.iv);
    },
    setKey: (state, action) => {
      state.key = action.payload;
      localStorage.setItem("key", state.key);
    },
    setAll: (state, action) => {
      const { encrypted, key, iv } = action.payload;
      console.log(encrypted, key, iv);
      state.encrypted = encrypted;
      state.iv = iv;
      state.key = key;
      localStorage.setItem("encrypted", state.encrypted);
      localStorage.setItem("iv", state.iv);
      localStorage.setItem("key", state.key);
    },
    logout: (state) => {
      (state.encrypted = ""), (state.key = ""), (state.iv = "");
    },
  },
});

export const { setEncrypted, setIv, setKey, setAll, logout } =
  userSlice.actions;

export default userSlice.reducer;
