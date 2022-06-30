import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth
   } from "../utils/Firebase/firebase.utils";
//the context value you want to accessfirebase/a
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});
//the provider
export const UserProvider = ({ children }) => {
  const [ currentUser, setCurrentUser ] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if(user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
      
    }) 
    return unsubscribe
  }, []);
  


  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
