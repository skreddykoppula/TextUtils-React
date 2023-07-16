import React, {useState} from 'react'

export default function TextForm(props) {
    const [text,setText] = useState("");
    // setText("Hello")
    const handleUpClick = () =>
    {
        console.log("Upper Case");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Upper case converted","success")
    }
    const handleLoClick = () =>
    {
        console.log("Lower Case");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Lower case converted","success")
    }
    const handleClearClick = () =>
    {
        console.log("clear");
        setText("");
        props.showAlert("clear","success")
    }


    const handleOnChange = (event) =>
    {
        console.log("on change");
        setText(event.target.value);
    }

    const handleCopyClick = () => {
        console.log("copy");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("copied","success")
      };
  return (
    <>
        <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
        <div className="form-group">
            <h1 >{props.heading}</h1>
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'grey':'white',color:props.mode==='light'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert To UpperCase</button>
        <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert To LowerCase</button>
        <button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear</button>
        <button className='btn btn-primary mx-1' onClick={handleCopyClick}>Copy</button>
        </div>

        <div className='container my-3' style={{color:props.mode==='light'?'black':'white'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"enter something to preview"}</p>
        </div>
    </>
  )
}
