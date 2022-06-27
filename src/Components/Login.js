import React, { useContext } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../Context/AuthContext";
import { USERDATA } from "../Data/Fakedata";
import useAuth from "../Hooks/useAuth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // const { setAuth } = useContext(AuthContext);  (or)
  const { setAuth } = useAuth(); //to fetch context we have to make use of useContaxt hook and context name we have AuthContext

  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || "/";
  console.log(location);

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = USERDATA.find((user) => user.username === username);
    if (user !== undefined) {
      if (user?.password === password) {
        setAuth(user);
        navigate(from);
      }
      console.log(user);
    }
  };
  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="enter username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="enter password"
      />
      <button onClick={(event) => handleSubmit(event)}>submit</button>
    </div>
  );
};

export default Login;
