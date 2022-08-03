import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./signup.css";

function SignUp1() {
  const initialValues = {
    firstName: "",
    lastName: "",
    userName: "",
    mobileNumber: "",
    gender: "",
    hobbies: "",
  };
  const [user, setUser] = useState(initialValues);
  const [userErrors, setUserErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const newInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setUserErrors(initialValues);
  };

  const submitData = (e) => {
    e.preventDefault();
    setUserErrors(Validate(user));
    setIsSubmit(true);
  
    const data1 = localStorage.setItem("data1", JSON.stringify(user));

    console.log(data1);
  };
  const Navigate = useNavigate();
  useEffect(() => {
    if (Object.keys(userErrors).length === 0 && isSubmit) {
      Navigate("/SignUp2");
    }
  }, [userErrors]);
  const Validate = (values) => {
    const errors = {};
    const Nregex = /^[a-zA-Z'-'s]{1,40}$/i;
    const regex = / ^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;
    const Noregex = /(0|91)?[7-9][0-9]{9}$/i;
    const hregex = /[a-zA-Z0-9_]$/;

    if (!values.firstName) {
      errors.firstName = "FirstName is required!";
    } else if (!Nregex.test(values.firstName)) {
      errors.firstName = "FirstName should use only words!";
    }
    if (!values.lastName) {
      errors.lastName = "lastName is required";
    } else if (!Nregex.test(values.lastName)) {
      errors.lastName = "lastName should use only words";
    }
    if (!values.userName) {
      errors.userName = "UserName is required";
    } else if (!Nregex.test(values.userName)) {
      errors.userName = "invalid UserName Format";
    }
    if (!values.mobileNumber) {
      errors.mobileNumber = "MobileNo is required";
    } else if (!Noregex.test(values.mobileNumber)) {
      errors.mobileNumber = "wrong";
    }
    if (!values.gender) {
      errors.gender = "Gender is required";
    } 
    if (!values.hobbies) {
      errors.hobbies = "Hobbies is required";
    } else if (!hregex.test(values.hobbies)) {
      errors.hobbies = "Fill any two";
    }

    return errors;
  };

  return (
    <Container>
      <form className="style" onSubmit={submitData}>
        <h1>Page 1</h1>
        <div className="stapper">
          <NavLink className="styleN" activeClassName="active" to="/signup">
            SignUp1
          </NavLink>
          <NavLink className="styleN" activeClassName="active" to="/signup1">
            Page2
          </NavLink>
          <NavLink className="styleN" activeClassName="active" to="/signup2" >
            Page3
          </NavLink>
       
        </div>

        <label>FirstName</label>
        <input
          type="firstName"
          name="firstName"
          placeholder="FirstName"
          onChange={newInput}
        />

        <p >{userErrors.firstName}</p>

        <label>lastName</label>
        <input
          type="lastName"
          name="lastName"
          placeholder="lastName"
          onChange={newInput}
        />

        <p>{userErrors.lastName}</p>
        <label>UserName</label>
        <input
          type="userName"
          name="userName"
          placeholder="UserName"
          onChange={newInput}
        />

        <p>{userErrors.userName}</p>
        <label>Mobile No</label>
        <input
          type="mobileNumber"
          name="mobileNumber"
          placeholder="MobileNumber"
          onChange={newInput}
        />

        <p>{userErrors.mobileNumber}</p>
        <p>Gender:</p>
        <div style={{ display: "flex" }}>
          <label>Male</label>
          <input
            style={{ width: "15px", height: "15px" }}
            type="radio"
            name="gender"
            placeholder="male"
            value="male"
            onChange={newInput}
          />

          <label>Female</label>
          <input
            style={{ width: "15px", height: "15px" }}
            type="radio"
            name="gender"
            placeholder="female"
            value="female"
            onChange={newInput}
          />

          <p>{userErrors.gender}</p>
        </div>

        <p>Hobbies:</p>
        <div style={{ display: "flex" }}>
          <label>Sports</label>
          <input
            type="checkbox"
            style={{ width: "15px", height: "15px" }}
            name="hobbies"
            placeholder="hobbies"
            value="Sports"
            onChange={newInput}
          />

          <label>Dancing</label>
          <input
            type="checkbox"
            style={{ width: "15px", height: "15px" }}
            name="hobbies"
            placeholder="hobbies"
            value="Dancing"
            onChange={newInput}
          />

          <label>Singing</label>
          <input
            type="checkbox"
            style={{ width: "15px", height: "15px" }}
            name="hobbies"
            placeholder="hobbies"
            onChange={newInput}
            value="singing"
          />

          <p>{userErrors.hobbies}</p>
        </div>
        <button className="fluid ui button blue">Submit</button>
      </form>
    </Container>
  );
}

export default SignUp1;
