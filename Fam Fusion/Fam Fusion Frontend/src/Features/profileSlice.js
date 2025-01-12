import { createSlice } from "@reduxjs/toolkit";
import data from "../../data";

const initialState = {
  allProfiles: JSON.parse(localStorage.getItem("allProfiles")) || data,
  likedProfiles: JSON.parse(localStorage.getItem("likedProfiles")) || [],
  viewedProfiles: JSON.parse(localStorage.getItem("viewedProfiles")) || [],
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    addToLiked: (state, action) => {
      const updatedLikedProfiles = [
        ...state.likedProfiles.slice(-14), // Keep the last 14 elements
        action.payload, // Add the new profile
      ];
      state.likedProfiles = updatedLikedProfiles;
      localStorage.setItem(
        "likedProfiles",
        JSON.stringify(updatedLikedProfiles)
      );
    },
    addToViewed: (state, action) => {
      const updatedViewedProfiles = [
        ...state.viewedProfiles.slice(-29), // Keep the last 29 elements
        action.payload, // Add the new profile
      ];
      state.viewedProfiles = updatedViewedProfiles;
      localStorage.setItem(
        "viewedProfiles",
        JSON.stringify(updatedViewedProfiles)
      );
    },
    removeFromLiked: (state, action) => {
      if (
        state.likedProfiles.length === 0 ||
        !state.likedProfiles ||
        !state.likedProfiles[0]
      ) {
        return;
      }
      const updatedLikedProfiles = state.likedProfiles.filter(
        (profile) => profile.id !== action.payload
      );
      state.likedProfiles = updatedLikedProfiles;
      localStorage.setItem(
        "likedProfiles",
        JSON.stringify(updatedLikedProfiles)
      );
    },
  },
});

export const { addToLiked, addToViewed, removeFromLiked } =
  profileSlice.actions;
export default profileSlice.reducer;
