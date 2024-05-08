import { ShipsState, ShipsActions, ShipActionTypes } from "./actionTypes";

const initialState: ShipsState = {
  ships: [],
};

export const ShipsReducer = (
  state = initialState,
  action: ShipsActions
): ShipsState => {
  switch (action.type) {
    case ShipActionTypes.GET_SHIPS:
      return { ships: action.payload };
    default:
      return state;
  }
};
