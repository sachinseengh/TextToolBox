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
       
        let newText = text.charAt(0).toUpperCase()+text.substring(1);
        
        setText(newText);
    }
    const Tc=()=>{
       
        let newText =text.split(" ").map(word=>word.charAt(0).toUpperCase()+word.substring(1)).join(" ");
        
        setText(newText);
    }
    const Onchange=(event)=>{
    
        setText(event.target.value);
    }
   
    // const [text,setText]=useState("Enter your text here");
    const [text,setText]=useState("");
    return(
        <>
<div className="container">
<div class="mb-3">
  <h1 className='my-3'>{props.title}</h1>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={Onchange} ></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={Up}>Convert to UpperCase</button>
<button className="btn btn-primary mx-2 my-1" onClick={Lp}>Convert to LowerCase</button>
<button className="btn btn-primary mx-2 my-1" onClick={Sc}>Sentence Case</button>
<button className="btn btn-primary mx-2 my-1" onClick={Tc}>Title Case</button>
</div>

<div className="container my-3">
    <h2>Your text Summary</h2>
    <p><b>{text.split(" ").length}</b> Words and <b>{text.length}</b> letters </p> 

    <p><b>{0.008* text.split(" ").length}</b> Minutes read</p>
    <h2>Preview</h2>
    <p>{text}</p>
</div>
</>
    )
}