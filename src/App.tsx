import React from 'react';
import Home from './component/Home/Home';
import {Routes,Route} from 'react-router-dom'
import PaymentPage from './component/Payment/PaymentPage';


function App() {
  return (
    <> 
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/payment' element={<PaymentPage />}/>          
      </Routes>
    </>
  );
}

export default App;
