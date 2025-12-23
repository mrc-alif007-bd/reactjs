import React from 'react';
import ReactDOM from 'react-dom/client';

import Fruits from './components/Fruits';
import Users from './components/Users';
import Vehicles from './components/Vehicles';
import MyForm from './components/MyForm';
import RegistrationForm from './components/RegistrationForm';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RegistrationForm/>
  </React.StrictMode>
);



