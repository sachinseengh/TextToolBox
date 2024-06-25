import { useState } from "react"
import React from 'react'

export default function TextBox(props){

    
    
    const Up=()=>{
       
        let newText = text.toUpperCase();
        
        setText(newText);
    }
    const Onchange=(event)=>{
    
        setText(event.target.value);
    }
    const clear=()=>{
    
        setText("");
    }
    const [text,setText]=useState("Enter your text here");
    return(
<div>

<div class="mb-3">
  <h1 className='my-3'>{props.title}</h1>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={Onchange} onClick={clear}></textarea>
</div>
<button className="btn btn-primary" onClick={Up}>Convert to UpperCase</button>
</div>

    )
}