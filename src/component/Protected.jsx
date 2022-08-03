// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import {Page} from './Page'

// const Protected = (props) => {
//   const { Component } = props;
//   const Transfer = useNavigate();
//   useEffect(() => {
//     let Page = localStorage.getItem("Page");
//     if (!Page) {
//       Transfer("/Page");
//     }
//   });
//   return (
//     <div className="nothing">
//       <Component/>
//     </div>
//   );
// };

// export default Protected;

import React from 'react'
import {Route, Routes} from 'react-router-dom'



const Protected = ({children,...rest}) => {
  let auth ={'tocken':false}
  return (
    <Route {...rest}>
      {!auth.tocken
      ?
      <Routes to ="/Page"/>
      :
    children}
    </Route>
  )
}

export default Protected