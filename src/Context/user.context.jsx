import { createContext, useEffect, useReducer } from "react";
import { createAction } from "../utils/Reducer/Reducer.utils";

import { onAuthStateChangedListener, 
          createUserDocumentFromAuth
   } from "../utils/Firebase/firebase.utils";
//the context value you want to accessfirebase/a
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});
//reducer 
export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state, action) => {

  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, 
              currentUser: payload 
            };
    default:
      throw new Error(`Unhandled action type: ${type} in userReducer`);
    }
  };

  
  //create the context provider

  export const UserProvider = ({ children }) => {
    const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);
  
    const setCurrentUser = (user) =>
      dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
  
    useEffect(() => {
      const unsubscribe = onAuthStateChangedListener((user) => {
        if (user) {
          createUserDocumentFromAuth(user);
        }
        setCurrentUser(user);
      });
  
      return unsubscribe;
    }, []);
  
  const value = { currentUser, setCurrentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
