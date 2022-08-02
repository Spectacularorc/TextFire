import React, {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = ()=>{
    console.log(`Uppercase was clicked  ${text}`)
      let newText1 = text.toUpperCase();
      setText(newText1);
      props.showAlert("Converted to uppercase!", "success");
  }

  const handleLoClick = ()=>{
    console.log(`Lowercase was clicked  ${text}`)
      let newText2 = text.toLowerCase();
      setText(newText2);
      props.showAlert("Converted to lowercase!", "success");
  }

  const handleClClick = ()=>{
      let newText3 = '';
      setText(newText3);
      props.showAlert("text cleared", "success");
  }

  const handleOnChange = (event)=>{
    console.log("On Change")
    setText(event.target.value)
  } 

  const handleCopy = ()=>{
    var text = document.getElementById("myBox")
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("copied to clipboard", "success");
  } 

  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  } 

  const [text, setText] = useState('');
  return (
  <>
   <div className="container" style={{color: props.mode==='dark'?'silver':'#080808'}}>
      <h1>{props.heading}</h1>
      <div className="floating">
        <textarea className="form-control" value = {text} onChange = {handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}}  placeholder="Enter the text" id="myBox" rows="10"></textarea>
      </div>

      <button className="btn 
      btn-primary my-3" onClick = {handleUpClick}>Convert to upper case </button>

      <button className="btn 
      btn-primary my-3 mx-2" onClick = {handleLoClick}>Convert to Lower case</button>

      <button className="btn 
      btn-primary my-3 mx-2" onClick = {handleClClick}>Clear text</button>

      <button className="btn 
      btn-primary my-3 mx-2" onClick = {handleCopy}>Copytext</button>

      <button className="btn 
      btn-primary my-3 mx-2" onClick = {handleExtraSpaces}>Remove Extra Spaces</button>

   </div>

   <div className="container my-3" style={{color: props.mode==='dark'?'silver':'#080808'}}>
      <h1>Your text summary</h1>
      <p> {text.split(" ").length} words and {text.length} characters </p>
      <p>{0.008* text.split(" ").length} Minuites Read </p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter somthing to Preview it here"}</p>
   </div>
  </>
  )
}
