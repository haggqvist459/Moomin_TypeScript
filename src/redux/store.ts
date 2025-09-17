import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "./slices";
import { saveData, LOCALSTORAGE_KEYS } from "@/utils";

export const store = configureStore({
  reducer : {
    appState: appReducer
  }
})

store.subscribe(() => {
  
  const state = store.getState();
  Object.values(LOCALSTORAGE_KEYS).forEach((key) => {
    saveData(key, state[key])
  })

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch