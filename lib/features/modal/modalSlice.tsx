import { RootState } from "@/lib/store/store";
import { createSlice } from "@reduxjs/toolkit";

type ModalState = {
  modalIsOpen: boolean;
};

const initialState: ModalState = {
  modalIsOpen: false,
};

export const openModalSlice = createSlice({
  name: "OpenModal",
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.modalIsOpen = !state.modalIsOpen;
    },
  },
});

export const { toggleModal } = openModalSlice.actions;

export const modalIsOpen = (state: RootState) => state.openModal.modalIsOpen;

export default openModalSlice.reducer;
