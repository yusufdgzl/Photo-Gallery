import { RootState } from "@/lib/store/store";
import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
type UserState = {
  userIsOpen: boolean;
};

// Define the initial state using that type
const initialState: UserState = {
  userIsOpen: false,
};

export const viewUsersSlice = createSlice({
  name: "ViewUsers",
  initialState,
  reducers: {
    toggleUser: (state) => {
      state.userIsOpen = !state.userIsOpen;
    },
  },
});

export const { toggleUser } = viewUsersSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const userIsOpen = (state: RootState) => state.showUsers.userIsOpen;

export default viewUsersSlice.reducer;
