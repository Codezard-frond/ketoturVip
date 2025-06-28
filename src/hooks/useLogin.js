import { useState } from "react";
import { auth} from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
import { useGlobalContext } from "./useGlobalContext";
import { useFireStore } from "./useFireStore";
export const useLogin = () => {
  const { updateDocument } = useFireStore("users");
  const { dispatch } = useGlobalContext();
  const [isPending, setIsPending] = useState(false);
  const [data, setData] = useState(null);

  const login = async (email, password) => {
    try {
      setIsPending(true);
      const req = await signInWithEmailAndPassword(auth, email, password);

      if (!req.user) {
        throw new Error("Login failed");
      }

      const user = req.user;

      updateDocument(user.uid, {
        online: true,
      });

      toast.success(`Welcome back, ${user.displayName || "User"}!`);

      dispatch({ type: "LOGIN", payload: user });
      setData(user);
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    } finally {
      setIsPending(false);
    }
  };

  return { login, isPending, data };
};
