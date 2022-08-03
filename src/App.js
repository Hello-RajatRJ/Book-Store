import React, { Component } from 'react'
import Page from './component/Page';
import Main from './component/Main';
import SignUp from './component/SignUp';
import SignUp1 from './component/Signup1';
import SignUp2 from './component/SignUp2';
import Profile from './component/Profile'
// import Cart from './component/kart/Cart';
// import Order from './component/kart/Order';
// import TrackOrder from './component/kart/TrackOrder';
// import Filter from './component/kart/Filter';
import Store from './component/Store';

// import Services from './component/kart/Services';
// import TermsAndCondition from './component/kart/TermsAndCondition'
import Product from "./component/Product";
import { Routes,Route } from 'react-router-dom';
import Preview from './component/Preview';
import Protected from './component/Protected';

const App = () => {
  return (
    <>
    <Routes >
      <Route path="/" element={<Page/>}/>
      <Route path="/main" element={<Main/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/signup1" element={<SignUp1/>}/>
      <Route path="/signup2" element={<SignUp2/>}/>
      <Route path="/preview" element={<Preview/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/store" element={<Store/>}/>
      <Route path="/products/:id" element={<Product/>}/>

      
     
      
      {/* <Route path="/cart" element={<Cart/>}/>
      <Route path="/order" element={<Order/>}/>
      <Route path="/trackorder" element={<TrackOrder/>}/>
      <Route path="/filter" element={<Filter/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/termsandcondition" element={<TermsAndCondition/>}/> */}



      
    
    </Routes>
  
  
    </>
  )
}

export default App