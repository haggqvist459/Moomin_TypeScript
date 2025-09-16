import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer : {

  }
})

store.subscribe(() => {
  
  const state = store.getState();
  // store list of owned mugs into localStorage 

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch