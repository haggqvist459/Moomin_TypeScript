import { configureStore } from "@reduxjs/toolkit";
import { mugReducer } from "./slices";

export const store = configureStore({
  reducer : {
    mugReducer: mugReducer
  }
})

store.subscribe(() => {
  
  const state = store.getState();
  // store list of owned mugs into localStorage 

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch