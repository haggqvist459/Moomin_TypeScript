import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer : {

  }
})

store.subscribe(() => {
  const state = store.getState();
   
})