//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';


import Navbar from './components/Navbar'
import TextBox from './components/TextBox'
// import About from './components/About'
function App() {
  const toggleMode=()=>{

    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor='#042743';

    }else{
      setMode("light");
      document.body.style.backgroundColor='white';
    }
  }
  const [mode,setMode]=useState("light");
  return (
<>

{/* to pass props  it works like arguments to a function*/}
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<div className="container">
  <TextBox title="Enter you text to analyze" mode={mode}/>
</div>


{/* <About/> */}







    </>
  );
}

export default App;
