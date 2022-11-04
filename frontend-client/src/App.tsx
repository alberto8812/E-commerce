
import './App.css';
import Home from './components/pages/Home';
import { Routes,Route } from "react-router-dom";
import Details from './components/pages/Details';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/detail/:id' element={<Details/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
