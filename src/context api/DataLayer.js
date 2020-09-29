import React, { createContext, useContext, useReducer } from "react";

export const DataLayerContext = createContext();

export const DataLayer = ({ initialstate, reducer, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialstate)}>
    {children}
  </DataLayerContext.Provider>
);
