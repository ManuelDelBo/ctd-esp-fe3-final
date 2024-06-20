import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext({ dentists: [] });

export const ContextProvider = ({ children }) => {
  const [dentists, setDentists] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    const fetchDentists = async () => {
      try {
        const response = await axios.get(url);
        setDentists(response.data);
      } catch (error) {
        console.error('Error fetching dentists:', error);
      }
    };
    fetchDentists();
  }, []);


  return (
    <ContextGlobal.Provider value={{dentists}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider

export const useContextProvider = () => {
  return useContext(ContextGlobal)
}
