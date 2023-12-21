import { useState } from "react";

export const LoggedIn = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);

  const handleLogin = () => {
    setIsLoggedin(true);
  };
  const handleLogout = () => {
    setIsLoggedin(false);
  };

  return (
    <div>
      <button onClick={handleLogin}>login</button>
      <button onClick={handleLogout}>logout</button>
      <div>User is {isLoggedin ? "loggedin" : "loggedout"}</div>
    </div>
  );
};
