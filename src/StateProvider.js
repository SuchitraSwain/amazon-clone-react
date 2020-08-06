// set data layer
// we need this ti track the basket
import React, { createContext, useContext, useReducer } from "react"

// this this is the data layer
export const StateContext = createContext();

// Build a provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// this is how we use it inside of a component

export const useStateValue = () => useContext(StateContext)