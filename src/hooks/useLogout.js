import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { useState } from "react";
import toast from "react-hot-toast";
import { useGlobalContext } from "./useGlobalContext";
import { useFireStore } from "./useFireStore";
export const useLogout = () => {
  const { dispatch, user } = useGlobalContext();
  const [isPending, setisPending] = useState(false);

  const { updateDocument } = useFireStore("users");

  const logout = async () => {
    try {
      updateDocument(user.uid, {
        online: false,
      });
      setisPending(true);
      await signOut(auth);
      dispatch({ type: "LOGOUT" });
      toast.success("See you soon :)");
    } catch (error) {
      toast.error(error.message);
      console.log(error.message);
    } finally {
      setisPending(false);
    }
  };
  return { logout, isPending };
};
