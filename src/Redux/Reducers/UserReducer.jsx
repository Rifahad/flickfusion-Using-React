import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "Users",
  initialState: {
    userDetails: null,
  },
  reducers: {
    StoreUserDetails: (state, action) => {
      const { ...UserDetails } = action.payload;
      console.log(UserDetails)
      state.userDetails = UserDetails;
    },
  },
});

export default userSlice;
