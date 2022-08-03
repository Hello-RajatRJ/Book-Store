import { useNavigate } from "react-router-dom";
import {
  Navbar,
  Container,
  Button,
  Nav,
  Form,
  Carousel,
} from "react-bootstrap";
import "./page.css";
import { Offcanvas } from "react-bootstrap";
import Cart from "../Assets/cart4.svg";
import { NavLink } from "react-router-dom";
import img from "../Assets/1491.jpg";
import img1 from "../Assets/history.jpg";
import img2 from "../Assets/precolonial.jpg";
import img3 from "../Assets/the-guns.jpg";
import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "./context/AuthProvider";
import axios from "./api/axios";
// const LOGIN_URL = '/auth';

function Page() {
  //   const initialValues = {  email: "", password: ""};
  //   const [email, setemail] = useState(initialValues);
  //   const [emailErrors, setemailErrors] = useState({});
  //   const [isSubmit, setIsSubmit] = useState(false);

  // {

  // }

  //   const newInput = (e) => {
  //     const { name, value } = e.target;
  //     setemail({ ...email, [name]: value });
  //     setemailErrors(initialValues)
  //   }

  //   const submitData = (e) => {
  //     e.preventDefault();
  //     setemailErrors(validate(email));
  //     setIsSubmit(true);

  // const data= localStorage.setItem("data",JSON.stringify(email));

  //     console.log(data)

  //   };
  // const Navigate = useNavigate()
  //   useEffect(() => {
  //     if (Object.keys(emailErrors).length === 0 && isSubmit) {
  //       Navigate('/main');

  //     }
  //   }, [emailErrors]);

  //   const validate = (values) => {
  //     const errors = {};
  //     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  //     const preregex = /^(?=.*[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

  //     if (!values.email) {
  //       errors.email = "Email is required!";
  //     } else if (!regex.test(values.email)) {
  //       errors.email = "This is not a valid email format!";
  //     }
  //     if (!values.password) {
  //       errors.password = "Password is required";
  //     }else if(!preregex.test(values.password)){
  //       errors.password="Password should be atleast one Upper case and one Special character or a Number"
  //     }

  //     return errors;
  //   };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { setAuth } = useContext(AuthContext);
  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [errMsg, setErrMsg] = useState("");


  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const Navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("hi");
    try {
      const users = await axios.get("http://localhost:3008/Form");
      // console.log(users.data);
      const allUsers = users.data;

      console.log(allUsers);
      const usr = await allUsers.filter(
        (data) => data.email === email && data.password === password
      );
      // console.log(usr[0]);
      // console.log("hi");
      console.log(usr);
      if (usr.length) return Navigate("/Main");
      else alert("Username or Password Wrong");
       console.log(usr)
       if(usr.length)return Navigate("/Main");
       else alert("please signup first")
      // const response = await axios.post('http://localhost:3008/Form',
      //   JSON.stringify({ email, password }),
      //   {
      //     headers: { 'Content-Type': 'application/json' },
      //     withCredentials: true
      //   }
      //   );
      // console.log(JSON.stringify(response?.data));
      // return Navigate('/Main')
      //console.log(JSON.stringify(response));
      // const accessToken = response?.data?.accessToken;
      // const roles = response?.data?.roles;
      // setAuth({ email, password, roles, accessToken });
      // setEmail('');
      // setpassword('');
      // setSuccess(true);
      // console.log("hii");
    } catch (err) {
      console.log(err);
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing emailname or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };
  const Kart = useNavigate();
  const handleChange = async (e) => {
    e.preventDefault();
    // console.log("hi");
    try {
      const users = await axios.get("http://localhost:3008/Form");
      // console.log(users.data);
      const allUsers = users.data;

      console.log(allUsers);
      const usr = await allUsers.filter(
        (data) => data.email === email && data.password === password
      );
     
     
       if(usr.length)return Navigate("/Main");
       else alert("please login first")
      
    } catch (err) {
      console.log(err);
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing emailname or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };
  

  return (
    <div className="backward" style={{ width: "100%", position: "inherit" }}>
      <div>
        <Navbar
          className="back"
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
        >
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>

          <Container fluid>
            <Navbar.Brand href="#">The NewBook</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              ></Nav>

              <Form className="d-flex">
                <Form className="d-flex">
                  <Form.Control
                    style={{ height: "40px", marginTop: "10px" }}
                    type="search"
                    Name="email"
                    id="email"
                    ref={emailRef}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="Email"
                    className="me-2"
                    // onChange={newInput}
                  />
                </Form>
                {/* <p>{emailErrors.email}</p> */}
                <Form className="d-flex">
                  <Form.Control
                    style={{ height: "40px", marginTop: "10px" }}
                    type="password"
                    name="password"
                    onChange={(e) => setpassword(e.target.value)}
                    value={password}
                    placeholder="Password"
                    className="me-2"
                    // onChange={newInput}
                  />
                </Form>

                {/* <p>{emailErrors.password}</p> */}
                <Button
                  onClick={handleSubmit}
                  className="button"
                  type="submit"
                  variant="outline-success"
                >
                  LogIn
                </Button>
                <NavLink
                  className="stylen"
                  activeClassName="active"
                  to="/signup"
                >
                  Signup
                </NavLink>
                <Button
                  className="styleng"
                  variant="primary"
                  onClick={handleShow}
                >
                  <img style={{ margin: "5px" }} src={Cart} />
                </Button>

                <Offcanvas show={show} onHide={handleClose}>
                  <Offcanvas.Header closeButton>
                    {/* <Offcanvas.Title>Cart</Offcanvas.Title> */}
                    <h1>CART</h1>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <a
                      onClick={handleChange}
                      className="butstyle"
                      activeClassName="active"
                    >
                      Cart
                    </a>
                  </Offcanvas.Body>
                </Offcanvas>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <Carousel>
        <Carousel.Item interval={200}>
          <a><img className="d-block w-100" height='500px'  src={img} alt="First slide" /></a>
                    <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={100}>
          <a><img className="d-block w-100"height='500px'  src={img1} alt="Second slide" /></a>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <a><img className="d-block w-100"height='500px'  src={img2} alt="Third slide" /> </a>
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <a><img className="d-block w-100"height='500px'  src={img3} alt="Third slide" /></a>
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="grid-container">
        <div className="grid-item">
          Item{" "}
          <button style={{ border: "none" }}>
            {" "}
            <img src={img} width="300px" alt="" />
            Name
            <button  onClick={handleChange} className="butstyle">Add To Cart</button>
          </button>
        </div>
        <div class="grid-item">
          Item2
          <button style={{ border: "none" }}>
            {" "}
            <img src={img1} width="300px" alt="" />
            Name
            <button onClick={handleChange}className="butstyle">Add To Cart</button>
          </button>
        </div>
        <div class="grid-item">
          Item3
          <button style={{ border: "none" }}>
            {" "}
            <img src={img2} width="300px" alt="" />
            Name
            <button onClick={handleChange}className="butstyle">Add To Cart</button>
          </button>
        </div>
        <div class="grid-item">
          Item4
          <button style={{ border: "none" }}>
            {" "}
            <img src={img3} width="300px" alt="" />
            Name
            <button onClick={handleChange}className="butstyle">Add To Cart</button>
          </button>
        </div>
        <div class="grid-item">
          Item5
          <button style={{ border: "none" }}>
            {" "}
            <img src={img} width="300px" alt="" />
            Name
            <button onClick={handleChange}className="butstyle">Add To Cart</button>
          </button>
        </div>
        <div class="grid-item">
          Item6
          <button style={{ border: "none" }}>
            {" "}
            <img src={img1} width="300px" alt="" />
            Name
            <button onClick={handleChange}className="butstyle">Add To Cart</button>
          </button>
        </div>
        <div class="grid-item">
          Item7
          <button style={{ border: "none" }}>
            {" "}
            <img src={img2} width="300px" alt="" />
            Name
            <button onClick={handleChange}className="butstyle">Add To Cart</button>
          </button>
        </div>
        <div class="grid-item">
          Item8
          <button style={{ border: "none" }}>
            {" "}
            <img src={img3} width="300px" alt="" />
            Name
            <button onClick={handleChange}className="butstyle">Add To Cart</button>
          </button>
        </div>
        <div class="grid-item">
          Item9
          <button style={{ border: "none" }}>
            {" "}
            <img src={img} width="300px" alt="" />
            Name
            <button onClick={handleChange}className="butstyle">Add To Cart</button>
          </button>
        </div>
        <div class="grid-item">
          Item10
          <button style={{ border: "none" }}>
            {" "}
            <img src={img1} width="300px" alt="" />
            Name
            <button onClick={handleChange}className="butstyle">Add To Cart</button>
          </button>
        </div>
        <div class="grid-item">
          Item11
          <button style={{ border: "none" }}>
            {" "}
            <img src={img2} width="300px" alt="" />
            Name
            <button onClick={handleChange}className="butstyle">Add To Cart</button>
          </button>
        </div>
        <div class="grid-item">
          Item12
          <button style={{ border: "none" }}>
            {" "}
            <img src={img3} width="300px" alt="" />
            Name
            <button onClick={handleChange}className="butstyle">Add To Cart</button>
          </button>
        </div>
      </div>
      <p style={{ backgroundColor: "white", textAlign: "center" }}>
        Copyright © 2022 This Site is Belong MR-RJ. All rights reserved.
      </p>
    </div>
  );
}

export default Page;
