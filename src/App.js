import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Shop from './components/Shop/Shop';

import React from 'react';
import {Route, Routes} from 'react-router-dom';

const App= () => {
  
  return (
    <> 
      <NavBar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/contact" element={<Contact/>} />
      
        </Routes>
        
      </div>     
    </>
   
  );
}

export default App;
