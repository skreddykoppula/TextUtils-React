// import logo from './logo.svg';
import { useState } from 'react';
import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
// import About from './Components/About';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
// import { BrowserRouter, Routes, Route } from "react-router-dom";





function App() {
  const [mode, setMode]=useState('light')//weather dark mode enabled or not


  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey'
      showAlert("Dark Mode Enabled","success")
      document.title="Text Util Dark Mode"

      //we use this to change title frequently for ads
      // setInterval(()=>{
      //   document.title="Hello"
      // },2000)
      // setInterval(()=>{
      //   document.title="World"
      // },1500)
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white'
      showAlert("White Mode Enabled","danger")
      document.title="Text Util Light Mode"
    }
  }

    const [alert, setAlert]= useState(null);
    const showAlert = (message,type) => {
        setAlert({
          msg: message,
          type: type
        })

        setTimeout(()=>{
            setAlert(null);
        },2000)
    }
  return (
    <>
 <Navbar title="New App" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className='container my-3'>
    {/* <BrowserRouter>
          <Routes> */}
            {/* <Route exact path="about" element={<About />} />
            <Route exact path="/" element= */}
            {<TextForm heading="Enter Your Text to Analysis" showAlert={showAlert} mode={mode}/>}
            {/* > */}
            
              
             
            {/* </Route> */}
          {/* </Routes>
        </BrowserRouter> */}

      
    </div>

    </>
  );
}

export default App;
