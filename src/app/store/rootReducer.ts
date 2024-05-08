import { combineReducers } from "@reduxjs/toolkit";
import { ShipsReducer } from "../../pages/ShipsPage/model/reducer";

export const rootReducer = combineReducers({
  ships: ShipsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
