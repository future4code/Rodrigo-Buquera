import Router from "./routes/Router";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Header from "./components/header/Header";
import React, {useState} from "react";

function App() {
  const token = localStorage.getItem("token")
  const [rightButtonText, setRightButtonText] = useState(token ? "Logout" : "login")

  return (
    <div>
      <BrowserRouter>
        <Header rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>
        <Router setRightButtonText={setRightButtonText}/>
      </BrowserRouter>
    </div>
  );
}

export default App; 
