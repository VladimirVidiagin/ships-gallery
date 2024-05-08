export interface Ship {
  title: string;
  description: string;
  icons: {
    large: string;
    medium: string;
  };
  level: number;
  type: {
    name: string;
    title: string;
    icons: {
      default: string;
    };
  };
  nation: {
    name: string;
    title: string;
    color: string;
    icons: {
      large: string;
      medium: string;
    };
  };
}

export interface ShipsState {
  ships: Ship[];
}

export enum ShipActionTypes {
  GET_SHIPS = "GET_SHIPS",
}

interface GetShipsAction {
  type: ShipActionTypes.GET_SHIPS;
  payload: Ship[];
}

export type ShipsActions = GetShipsAction;
