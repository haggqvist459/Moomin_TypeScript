import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slices/mugs/slice";
// import type { AppState } from './slices/mugs/slice';


import { saveData, LOCALSTORAGE_KEYS } from "@/utils";

export const store = configureStore({
  reducer: {
    appState: appReducer
  }
})

const testState = store.getState();


// store.subscribe(() => {

//   const state = store.getState();
//   Object.values(LOCALSTORAGE_KEYS).forEach((key) => {
//     saveData(key, state[key])
//   })

// })


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// export type RootState = {
//   appState: AppState;
// };

// src/redux/store.ts