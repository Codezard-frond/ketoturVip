import { auth, db } from "../firebase/config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useGlobalContext } from "./useGlobalContext";
import { useState } from "react";

import { doc, setDoc, updateDoc } from "firebase/firestore";
import toast from "react-hot-toast";

export const useGoogleProvider = () => {
  const { dispatch } = useGlobalContext();
  const [isPending, setisPending] = useState(false);
  const [data, setData] = useState(null);

  const googleProvider = async () => {
    try {
      setisPending(true);
      const provider = new GoogleAuthProvider();
      const req = await signInWithPopup(auth, provider);
      const user = req.user;
      await setDoc(doc(db, "users", user.uid), {
        photoURL: user?.photoURL,
        online: true,
      });
      toast.success(`Welcome, ${displayName}!`);
      const userFef = doc(db, "users", user.uid);
      await updateDoc(userFef, {
        online: true,
      });

      setData(user);
      dispatch({ type: "LOGIN", payload: user });
      toast.success(`Welcome ${user.displayName}`);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setisPending(false);
    }
  };

  return { isPending, data, googleProvider };
};
