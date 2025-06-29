import React, { use } from "react";

function Avatar({ user }) {
  return (
    <div className="">
      <div className="avatar flex items-center justify-center">
        <div className="ring-primary ring-offset-base-100 w-24 m-1 rounded-full ring-2 ring-offset-2">
          <img src={user?.photoURL} />
          <h2>{user?.displayName}</h2>
          <h2>{user?.email}</h2>
        </div>
      </div>
    </div>
  );
}

export default Avatar;
