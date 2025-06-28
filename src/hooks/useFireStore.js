import { useEffect, useReducer, useState } from "react";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase/config";
import toast from "react-hot-toast";
const inialState = {
  isPanding: false,
  error: null,
  success: true,
  data: null,
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "IS_PENDING":
      return { isPanding: true, error: null, success: true, data: null };
    case "ERROR":
      return { isPanding: false, error: payload, success: false, data: null };
    case "SUCCES":
      return { isPanding: false, error: null, success: true, data: payload };
    default:
      return state;
  }
};

export const useFireStore = (c) => {
  const [isCanceled, setisCanceled] = useState(false);

  const [state, dispatch] = useReducer(reducer, inialState);

  const chekCanceled = (action) => {
    if (!isCanceled) {
      dispatch(action);
    }
  };

  const addDcument = async (data) => {
    try {
      dispatch({ type: "IS_PENDING", payload: true });
      const res = await addDoc(collection(db, c), data);
      chekCanceled({ type: "SUCCES", payload: res });
      toast.success("Success");
    } catch (error) {
      dispatch({ type: "ERROR", payload: error.message });
      toast.error(error.message);
    } finally {
      dispatch({ type: "IS_PENDING", payload: false });
    }
  };

  const updateDocument = async (id, data) => {
    const ref = doc(db, c, id);
    try {
      dispatch({ type: "IS_PENDING", payload: true });
      const res = await updateDoc(ref, data);
      toast.success("Success");
      chekCanceled({ type: "SUCCES", payload: res });
    } catch (error) {
      dispatch({ type: "ERROR", payload: error.message });
      toast.error(error.message);
    } finally {
      dispatch({ type: "IS_PENDING", payload: false });
    }
  };

  const deleteDocument = async (id) => {
    try {
      dispatch({ type: "IS_PENDING", payload: true });
      await deleteDoc(doc(db, c, id));
      toast.success("Success");
    } catch (error) {
      dispatch({ type: "ERROR", payload: error.message });
      toast.error(error.message);
    } finally {
      dispatch({ type: "IS_PENDING", payload: false });
    }
  };

  useEffect(() => {
    return () => setisCanceled(true);
  }, []);

  return { ...state, updateDocument, deleteDocument, addDcument };
};
