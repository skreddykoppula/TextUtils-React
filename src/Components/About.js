import React, { useState } from "react";

export default function About() {
    let mystyle1 = {
        width: '18rem'
    }
    const [mystyle2,setmystyle2] = useState(
    {
        color : 'white',
        backgroundColor: 'black',
    })

    const [btnText,setBtnText] = useState("Enable Light Mode")

    const togglestyle = () => {
        if(mystyle2.color==='white'){
            setmystyle2({
                color:'black',
                backgroundColor:'white'
            })
            setBtnText("Enable Dark Mode")
        }
        else{
            setmystyle2({
                color:'white',
                backgroundColor:'black'
            })
            setBtnText("Enable Light Mode")
        }
    }
  return (
    <div className="container" style={mystyle2}>
      <h1>About Us</h1>
      <div className="card" style={mystyle1}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body"style={mystyle2}>
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="/" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div className="container my-3">
      <button onClick={togglestyle} className="btn btn-primary">{btnText}</button>
      </div>
    </div>
  );
}
