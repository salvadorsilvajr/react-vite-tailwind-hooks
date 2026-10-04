import { useState, useEffect } from "react";
import {
  auth,
  signInWithEmailAndPassword,
  updateDoc,
  query,
  collection,
  getDocs,
  where,
  doc,
  db,
} from "../firebase/config";
import UseMyUserContext from "../hooks/UseUserContext";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = UseMyUserContext();
  const navigate = useNavigate();

  // console.log(data);

  const findUser = async (user) => {
    const { uid } = user;
    // console.log("finding user", uid);

    let data = {};
    const querySnapshot = await getDocs(collection(db, "UsersTestCss"));
    querySnapshot.forEach((doc) => {
      if (doc.id === uid) {
        data = doc.data();
      }
    });

    dispatch({ type: "LOGIN", payload: { user, data } });
  };

  const login = async (email, password) => {
    setError(null);
    setIsPending(true);

    try {
      // login
      const res = await signInWithEmailAndPassword(auth, email, password);

      if (!res) {
        throw new Error("Could not complete the Sign In");
      }

      // update online status
      await updateDoc(doc(db, "UsersTestCss", res.user.uid), {
        online: true,
        // photoURL:'/images/logo.png'
      });

      // findUser(user);
      findUser(res.user);
      navigate("/");

      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      console.log(err.message);
      if (!isCancelled) {
        setError(err);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    setIsCancelled(false);
    return () => setIsCancelled(true);
  }, []);

  return { login, isPending, error };
};
