import React,{useState} from 'react'

export default function TextForm(props) {

  const handleUpClick =()=>
  {
    // console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase!","success");
  }

  const handleLoClick =()=>
    {
      // console.log("lowercase was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to lowercase!","success");
    }
    const handleClearClick =()=>
      {
        let newText = '';
        setText(newText)
        props.showAlert("Text has been cleared successfully!","success");
      }

  const handleOnchange =(event)=>
    {
      // console.log("Onchange!");
      setText(event.target.value);
    }
    //Credits: YT subs1
    const handleCopy = () => {
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text copied to Clipboard!","success");
    }
    //Credits: YT subs2
    const handleExtraSpaces = () =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Extra Space has been removed!","success");
    }

  const [text, setText] = useState('');
  return (
    <>
    <div className= "container" style={{color: props.mode === 'dark' ? 'white' : '#070F2B'}}>
 <h1 >{props.heading}</h1>   
<div className="mb-3">
<textarea className="form-control" value ={text} onChange={handleOnchange} style={{backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',  color: props.mode === 'dark' ? 'white' : '#070F2B'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear text</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>

    <div className="container my-3"  style={{color: props.mode === 'dark' ? 'white' : '#070F2B'}}>
      <h2>Your text summary</h2>
      <p> <b>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</b></p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0? text:"Enter something in the textbox above to preview it here"}</p>
    </div>

    </>
    
  )
}

