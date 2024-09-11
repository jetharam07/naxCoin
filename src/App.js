import "./App.css";
import Card from "./components/Card";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Secondpage from "./components/Pages/Secondpage";
import ThirdPage from "./components/Pages/ThirdPage";
import Fourthpage from "./components/Pages/Fourthpage";


function App() {

  return (
    <>
    <div className="App">
      <Home />
      <Card/>        
      <Secondpage/>
      <ThirdPage/>
      <Fourthpage/>

    </div>
    </>
  );
}

export default App;