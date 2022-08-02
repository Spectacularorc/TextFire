import { useState } from "react";
// import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode enabled or not
  const [alert, setAlert] = useState(null); 

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500)
  }

 const toggleMode =()=>{
    if(mode=== 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#303030';
      showAlert("Dark Mode has been enabled", "success");
    }
    else if(mode=== 'dark')
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
    }
  
    else if(mode=== 'dark'|| mode==='light')
    {
      setMode('Red');
      document.body.style.backgroundColor = '#65000B';
      showAlert("Red Mode has been enabled", "success");
    }
  }
  
  return (
    <>
      {/* <Navbar title= "TextFire" aboutText= "About-TextFire"/> */}
      {/* <Navbar/> */}
      <BrowserRouter>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Routes>
        <Route path="/" element={<TextForm showAlert={showAlert} heading='Enter Text Here' mode={mode}></TextForm>} />
        <Route path="/about" element={<About />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
