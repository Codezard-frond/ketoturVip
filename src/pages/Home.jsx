import React from "react";
import useCollaction from "../hooks/useCollaction";

function Home() {
  const { data } = useCollaction("salomat");
  return (
    <div>
      {data &&
        data.map((r) => {
          return <h2>{r.title}</h2>;
        })}
    </div>
  );
}
export default Home;
