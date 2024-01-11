import React from "react";
import { useAuth } from "./AuthContext";

const AuthExample = () => {
  const { isLoggedIn, login, logout } = useAuth();

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Welcome, User!</h2>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Please log in</h2>
          <button onClick={login}>Login</button>
        </div>
      )}
    </div>
  );
};

export default AuthExample;
