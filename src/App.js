//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';


import Navbar from './components/Navbar'
import TextBox from './components/TextBox'
import Alert from './components/Alert'
// import About from './components/About'
// import {RouterProvider, createBrowserRouter } from 'react-router-dom'



function App() {

 
  const toggleMode=()=>{

    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode Enabled","success");

    }else{
      setMode("light");
      document.body.style.backgroundColor='white';
      showAlert("Light Mode Enabled","success");
    }
  }
  const [mode,setMode]=useState("light");




  //for alert message
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      message: message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }

  //About page is removed because it doesnot work properly with github pages

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element:<><Navbar title="TextToolBox" mode={mode} toggleMode={toggleMode}/>
  //     
  //     <TextBox title="Enter you text to analyze" mode={mode}/></>
  //   },
  //   {
  //     path:"/about",
  //     element:<><Navbar title="TextToolBox" mode={mode} toggleMode={toggleMode}/>
  //     <Alert alert={alert}/>
  //     <About mode={mode}/></>
  //   }
  // ])

  return (
<>

{/* to pass props  it works like arguments to a function*/}
<Navbar title="TextToolBox" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert} mode={mode}/>
<div className="container">
  <TextBox title="Enter you text to analyze" mode={mode}/>
</div>


{/* <About/> */}


{/* <RouterProvider router={router}/> */}







    </>
  );
}

export default App;
