import React, { useState } from 'react'
import './App.css';

import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({msg : message, type : type});
  }

  setTimeout(() => {
    setAlert(null);
  }, 2000);

  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'cyan';
      showAlert('Dark Mode Activated', 'success');
      document.title = 'Dark Mode'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('LIght Mode Activated', 'success');
      document.title = 'Light Mode'
    }
  }

  const greenMode = () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'green'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <>
      <Router>
      <Navbar title="MyProjects" aboutText="About" mode={mode} toggleMode={toggleMode} greenMode={greenMode} />
      <Alert alert={alert}/>
      <div className="container">
         <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Enter Your Text Here" mode={mode} /> 
          </Route>
        </Switch>  
      </div>
      </Router>
    </>
  );
}

export default App;
