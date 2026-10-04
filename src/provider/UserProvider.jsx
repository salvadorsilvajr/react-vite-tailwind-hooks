import { useReducer, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { UserReducer, UserInitialState } from "../reducer/userReducer";
import { onAuthStateChanged, auth } from "../firebase/config";

export default function MyProvider({ children }) {
  const [state, dispatch] = useReducer(UserReducer, UserInitialState);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      dispatch({ type: "AUTH_IS_READY", payload: user });
      unsub();
    });
  }, []);

  const value = { state, dispatch };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
