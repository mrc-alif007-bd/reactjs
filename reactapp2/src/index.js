import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Nav1 from './components/Nav1';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Service from './pages/Service';
import Car from './pages/Car';
import Form from './pages/Form';


function App() {

 // let wheels = 4;
 // let carinfo = {brand:" BMW", year:" 2025", color:" red"};
  let carinfo = [" BMW", " 2025", " red"];

  return (
    <BrowserRouter>
      {/* Navigation */}
      <Nav1></Nav1>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/car" element={<Car brand=" Toyota" year="2020" color=" Black" carinfo={carinfo}/>} />
        <Route path="/form" element={< Form/>}  />
      </Routes>
    </BrowserRouter>
  );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

