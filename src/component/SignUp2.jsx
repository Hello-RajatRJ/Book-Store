import { useState, useEffect } from "react";
import { useNavigate} from "react-router-dom"
import { NavLink } from "react-router-dom";
import {Container} from 'react-bootstrap';
import "./signup.css";

function SignUp2() {
  const initialValues = { adventurerbooks:"",comicbooks:"",storiesbooks:"",cartoonbooks:"", warbooks:"",ancientbooks:"",
devotionalbooks:"",lawstorybooks:"",policestorybooks:"",teacherstorybooks:"",ownstorybooks:"" };
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
    
    const data2= localStorage.setItem("data2",JSON.stringify(user));

    console.log(data2)
 

  };
const Navigate = useNavigate()
  useEffect(() => {
    if (Object.keys(userErrors).length === 0 && isSubmit) {
      Navigate('/Preview');
    }
  }, [userErrors]);
  const validate = (values) => {
    const errors = {};
   
 
   
    if (!values.adventurerbooks) {
      errors.adventure = " Please fill this field first ";
    } 
    if (!values.comicbooks) {
      errors.comicbooks = " Please fill this field first ";
    } 
    if (!values.storiesbooks) {
      errors.storiesbooks = "Please fill this field";
    }
    if (!values.cartoonbooks) {
      errors.cartoonbooks = "Please fill this field";
    }
    if (!values.warbooks) {
        errors.warbooks = "Please fill this field";
      }
      if (!values.ancientbooks) {
        errors.ancientbooks = "Please fill this field";
      }
      if (!values.devotionalbooks) {
        errors.devotionalbooks = " Please fill this field first ";
      } 
      if (!values.lawstorybooks) {
        errors.lawstorybooks = "Please fill this field";
      }
      if (!values.policestorybooks) {
        errors.policestorybooks = "Please fill this field";
      }
      if (!values.teacherstorybooks) {
        errors.teacherstorybooks = "Please fill this field";
      }
      if (!values.ownstorybooks) {
        errors.ownstorybooks = "Please fill this field";
      }
      
    
   

    return errors;
  };
  
  return (
    <Container>
      <form  className="style" onSubmit={submitData}>
        
      <h1>Page 2</h1>
      <div className="stapper">      
    <NavLink className="styleN" activeClassName="active" to="/signup">Page1</NavLink>
    <NavLink className="styleN" activeClassName="active" to="/signup1">SignUp2</NavLink>
    <NavLink className="styleN" activeClassName="active" to="/signup2">Page3</NavLink>
    
      </div>
          
            <label style={{color:"white"}}>Adventurerbooks</label>
            <input
              type="name"
              name="adventurerbooks"
              placeholder="Which kind of story"
              onChange={newInput}
           />
              {userErrors.adventurerbooks}
              <label style={{color:"white"}}>Comicbooks</label>
            <input
              type="name"
              name="comicbooks"
              placeholder="Which kind of story"
              onChange={newInput}
           
              
              />
              {userErrors.comicbooks}
              <label style={{color:"white"}}>Storiesbooks</label>
            <input
              type="name"
              name="storiesbooks"
              placeholder="Which kind of story"
              onChange={newInput}
           
              
              />
              {userErrors.storiesbooks}
              <label style={{color:"white"}}>Cartoonbooks</label>
            <input
              type="name"
              name="cartoonbooks"
              placeholder="Which kind of story"
              onChange={newInput}
           
              
              />
              {userErrors.cartoonbooks}
              <label style={{color:"white"}}>Warbooks</label>
            <input
              type="name"
              name="warbooks"
              placeholder="Which kind of story"
              onChange={newInput}
           
              
              />
              {userErrors.warbooks}
             
              <label style={{color:"white"}}>Ancientbooks</label>
            <input
              type="name"
              name="ancientbooks"
              placeholder="Which kind of story"
              onChange={newInput}
           
              
              />
              {userErrors.ancientbooks}
              <label style={{color:"white"}}>Devotionalbooks</label>
            <input
              type="name"
              name="devotionalbooks"
              placeholder="Which kind of story"
              onChange={newInput}
           
              
              />
              {userErrors.devotionalbooks}
              <label style={{color:"white"}}>LawStorybooks</label>
            <input
              type="name"
              name="lawstorybooks"
              placeholder="Which kind of story"
              onChange={newInput}
           
              
              />
              {userErrors.lawstorybooks}
              <label style={{color:"white"}}>PoliceStorybooks</label>
            <input
              type="name"
              name="policestorybooks"
              placeholder="Which kind of story"
              onChange={newInput}
           
              
              />
              {userErrors.policestorybooks}
              <label style={{color:"white"}}>TeacherStorybooks</label>
            <input
              type="name"
              name="teacherstorybooks"
              placeholder="Which kind of story"
              onChange={newInput}
           
              
              />
              {userErrors.teacherstorybooks}
              <label style={{color:"white"}}>OwnStorybooks</label>
            <input
              type="name"
              name="ownstorybooks"
              placeholder="Which kind of story"
              onChange={newInput}
           
              
              />
              {userErrors.ownstorybooks}
              
            




          <button type="submit" className="fluid ui button blue">Submit</button>
      
  
      
      </form>
    </Container>
  );
}


export default SignUp2;