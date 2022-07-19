import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/Firebase/firebase.utils";

export const CategoriesContext = createContext({
  CategoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    }
    getCategoriesMap();
  }, []);

  const value = { categoriesMap  };
  return (
    <CategoriesContext.Provider value={value}> 
    {children} 
    </CategoriesContext.Provider>
 )

}
