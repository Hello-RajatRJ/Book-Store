import { useState, useEffect } from "react";
import { useNavigate} from "react-router-dom"
import { NavLink } from "react-router-dom";
import {Container} from 'react-bootstrap'

import "./signup.css";

function SignUp() {
  const initialValues = {  email: "", password: "",confirmPassword:"" };
  const [user, setUser] = useState(initialValues);
  const [userErrors, setUserErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const newInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setUserErrors(initialValues)
  }

  const submitData = (e) => {
    e.preventDefault();
    setUserErrors(validate(user));
    setIsSubmit(true);
   
const data= localStorage.setItem("data",JSON.stringify(user));

    console.log(data)
 

  };
const Navigate = useNavigate()
  useEffect(() => {
    if (Object.keys(userErrors).length === 0 && isSubmit) {
      Navigate('/SignUp1');

    }
  }, [userErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const preregex = /^(?=.*[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
   
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }else if(!preregex.test(values.password)){
      errors.password="Password should be atleast one Upper case and one Special character or a Number"
    }
    
    if (!values.confirmPassword) {
      errors.confirmPassword = "ConfirmPassword is required";
    }
    else if(values.confirmPassword !== values.password)
    {
      errors.confirmPassword="Password doesn't match"
  }

    return errors;
  };
  
  return (
    <Container>
      <form  className="style" onSubmit={submitData}>
        
      <h1>Signup</h1>                              
      <div className="stapper">      
    <NavLink className="styleN" activeClassName="active" to="/signup">Page1</NavLink>
    <NavLink className="styleN" activeClassName="active"  to="/signup1">Page2</NavLink>
    <NavLink className="styleN" activeClassName="active" to="/signup2">Page3</NavLink>
     
      </div>
          
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={newInput}
           
              // onSubmit={submitData}
              />
              {userErrors.email}
     
        
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={newInput}
              
              // onSubmit={submitData}
            />
         
          <p>{userErrors.password}</p>
        <label>ConfirmPassword</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="CoPassword"
              values="xxxxxxx"
              onChange={newInput}
              // onSubmit={submitData}
            />

         
          <p>{userErrors.confirmPassword}</p>
          <button className="fluid ui button blue">Submit</button>
  
      
      </form>
    </Container>
  );
}


export default SignUp;