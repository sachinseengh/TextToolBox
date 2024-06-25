//import logo from './logo.svg';
import './App.css';


import Navbar from './components/Navbar'
import TextBox from './components/TextBox'
function App() {
  return (
<>

{/* to pass props  it works like arguments to a function*/}
<Navbar title="TextUtils"/>
<div className="container">
  <TextBox title="Enter you text to analyze"/>
</div>








    </>
  );
}

export default App;
