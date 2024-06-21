import { createContext, useContext, useEffect, useReducer, useState } from "react";
import axios from "axios";

export const initialState = { 
  theme: "light", 
  dentists: [], 
  favorites: [] 
};

export const ContextGlobal = createContext();

const reducer = (state, action) => {
  switch(action.type){
    case "SET_THEME":
      return { ...state, theme: action.payload };
    case "SET_DENTISTS":
      return { ...state, dentists: action.payload };
    case "ADD_FAV":
      return { ...state, favorites: [...state.favorites, action.payload] };
    default:
      return state;
  }
}

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  useEffect(() => {
    const fetchDentists = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        dispatch({ type: "SET_DENTISTS", payload: response.data });
      } catch (error) {
        console.error('Error fetching dentists:', error);
      }
    };
    fetchDentists();
  }, []);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useContextProvider = () => {
  return useContext(ContextGlobal);
}
