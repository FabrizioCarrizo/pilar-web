import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../reducers/rootReducer";

export const createStore = () => {
  let store = configureStore({
    reducer: rootReducer,
  });

  return store;
};


