import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Navbar from'./components/Navbar'
import './App.css';



function App() {
  return (
    <>
      
      

      <Router>
      <Navbar/>
    
        <Routes>
      
    <Route exact path="/" element={<Page1/>} />
     
    <Route exact path="/referred" element={<Page2/>} />
    
    
     </Routes>
  </Router> 
    </>
  );
}

export default App;
