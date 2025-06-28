import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, onSnapshot } from "firebase/firestore";

function useCollaction(c) {
  const [data, setData] = useState(null);
  useEffect(() => {
    const onsubscribe = onSnapshot(collection(db, c), (snapchot) => {
      const data = [];
      snapchot.forEach((d) => {
        data.push({ id: d.id, ...d.data() });
      });
      setData(data);
    });
    return () => onsubscribe();
  }, [c]);
  return {data};
}

export default useCollaction;
