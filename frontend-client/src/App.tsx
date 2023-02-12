
import './App.css';

import { Routes,Route, Navigate } from "react-router-dom";
import Navbar from './components/component/navbar/Navbar';
import { routes } from './components/routes/routes';


routes

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        {routes.map(({path,Component})=>(
            <Route path={path} element={<Component/>} />
        ))}
        
        <Route path='/*' element={ <Navigate to={routes[0].to} replace /> } />
      </Routes>
    
    </div>
  );
}

export default App;
