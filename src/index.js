import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Navbarr from './components/navbarr/Navbarr';
import Carousal from './components/carousal/Carousal';
import Cards from './components/cards/Cards';
import Para from './components/para/Para';
import Cartoon from './components/cartoon/Cartoon';
import Cartoonapp from './components/cartoon/Cartoonapp'
import Enroll from './components/enroll/Enroll';
import Pic from './components/pic/Pic'
import Vision from './components/vision/Vision';
import About from './components/about/About';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Navbarr/>  
    <Carousal/>
    <Cards/>
    <Para/>
    <Cartoon/>
    <Cartoonapp/>
    <Enroll/>
    <Pic/>
    <Vision/>
    <About/>
    
    
    
  </React.StrictMode>
);

