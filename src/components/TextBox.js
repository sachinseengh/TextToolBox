import { useState } from "react"
import React from 'react'

export default function TextBox(props){

    
    
    const Up=()=>{
       
        let newText = text.toUpperCase();
        
        setText(newText);
    }
      
    const Lp=()=>{
       
        let newText = text.toLowerCase();
        
        setText(newText);
    }
    const Sc=()=>{
       
        let newText = text.charAt(0).toUpperCase()+text.substring(1).toLowerCase();
        
        setText(newText);
    }
    const Tc=()=>{
       
        let newText =text.split(" ").map(word=>word.charAt(0).toUpperCase()+word.substring(1).toLowerCase()).join(" ");
        
        setText(newText);
    }
    const Onchange=(event)=>{
    
        setText(event.target.value);
    }
    const handleExtraSpace=()=>{
        let newtxt = text.split(/[ ]+/);
        setText(newtxt.join(" "));
    }
   
    // const [text,setText]=useState("Enter your text here");
    const [text,setText]=useState("");
    return(
        <>
<div className="container" style={{color:props.mode==='light'?'black':'white'}}>
<div class="mb-3">
  <h1 className='my-3' >{props.title}</h1>
  <textarea className="form-control" id="exampleFormControlTextarea1"
   rows="8"  value={text} onChange={Onchange} style={{backgroundColor:props.mode==='dark'?'#042743':'white',color:props.mode==='light'?'black':'white'}} ></textarea>
</div>
<button  disabled={text.length===0} className="btn btn-primary mx-2" onClick={Up}>Convert to UpperCase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={Lp}>Convert to LowerCase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={Sc}>Sentence Case</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={Tc}>Title Case</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>
</div>

<div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
    <h2>Your text Summary</h2>
    <p><b>{text.split("/\s+/").filter((element)=>{return element.length !== 0}).length}</b> Words and <b>{text.length}</b> letters </p> 

    <p><b>{0.008* text.split(" ").length}</b> Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter your text to preview here "}</p>
</div>
</>
    )
}