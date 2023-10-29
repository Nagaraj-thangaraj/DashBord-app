import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import "./loginForm.css";
import Button from "@mui/material/Button";
import { Context } from "../Context/Context";
import { useNavigate } from "react-router-dom";
function LoginForm() {
  const navigate = useNavigate();
  const {
    userName,
    setUserName,
    userPassword,
    setUserPassword,
    errorMessage,
    setErrorMesssage,
  } = useContext(Context);
  function handleLogin() {
    const validUsername = "Nagaraj";
    const validPassword = "Nagu@1234";
    if (userName === validUsername && userPassword === validPassword) {
      navigate("dashbord");
      
    } else {
      setErrorMesssage("Invalid username or password");
    }
  }
  return (
    <>
    <div className="login-box">
      <h1 className="login">LOGIN FORM </h1>
      <div className="box">
        <form action="#" method="get" onSubmit={handleLogin}>
          <TextField
            id="standard-basic"
            label="User Name"
            variant="standard"
            className="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <TextField
            type="password"
            id="standard-basic"
            label="User password"
            variant="standard"
            className="text1"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
          />
          <h3 className="errorMessage">{errorMessage}</h3>
          <Button
            type="submit"
            variant="contained"
            color="success"
            className="btn"
          >
            LOGIN
          </Button>
        </form>
      </div>
      </div>
    </>
  );
}

export default LoginForm;
