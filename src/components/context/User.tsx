import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";

export const User = () => {
  const userContext = useContext(UserContext);

  const handleLogin = () => {
    if (userContext) {
      userContext.setUser({ name: "mohamed", email: "mohamed@gmail.coms" });
    }
  };
  const handleLogout = () => {
    userContext.setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>login</button>
      <button onClick={handleLogout}>logout</button>
      {userContext?.user ? (
        <>
          <div>User name is {userContext?.user?.name}</div>
          <div>User email is {userContext?.user?.email}</div>
        </>
      ) : (
        <div>please log in</div>
      )}
    </div>
  );
};
