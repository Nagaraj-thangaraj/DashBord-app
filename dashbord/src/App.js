import { useState } from "react";
import "./App.css";
import { Context } from "./Context/Context";
import LoginForm from "./LoginForm/LoginForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashbord from "./DashBord/Dashbord";

function App() {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errorMessage, setErrorMesssage] = useState("");
  return (
    <Context.Provider
      value={{
        userName,
        setUserName,
        userPassword,
        setUserPassword,
        errorMessage,
        setErrorMesssage,
      }}
    >
      <div className="App">
        <BrowserRouter>
       <Routes>
        <Route path="/" element={<LoginForm/>}/>
        <Route path="dashbord" element={<Dashbord/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    </Context.Provider>
  );
}

export default App;
