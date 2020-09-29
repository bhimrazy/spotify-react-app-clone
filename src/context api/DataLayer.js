import Raect, { createContext, useContext, useReducer } from "react";

export const DataLayerContext = createContext();

export const DataLayer = ({ initialstate, reducer, children }) => (
  <DataLayerContext.Provider value={usereducer(reducer, initialstate)}>
    {children}
  </DataLayerContext.Provider>
);
