import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./main.css";
import {
  Navbar,
  Container,
  Button,
  Nav,
  Form,
  
} from "react-bootstrap";
import Cart from "../Assets/cart-70-16.ico";
import img from "../Assets/bell.svg";
import img1 from "../Assets/gear.svg";
import img2 from "../Assets/plus-circle-dotted.svg";
import img3 from "../Assets/search.svg";

import img5 from "../Assets/person-circle.svg";
import img6 from '../Assets/shop.svg'
import { Offcanvas } from "react-bootstrap";
import status from "../Assets/plus-circle-fill.svg";

const Main = () => {
  const initialValues = {
   
  };
const [user, setUser] = useState(initialValues);
const [userErrors, setUserErrors] = useState({});
const [isSubmit, setIsSubmit] = useState(false);
const [file, setFile] = useState();
const [show, setShow] = useState(false);
  
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);


const newInput = (e) => {
  const { name, value } = e.target;
  setUser({ ...user, [name]: value });
  setUserErrors(initialValues);
  

}


  function importVideo(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setUserErrors(initialValues);
  }

  return (
    <>
      <div className="backword">
        <div style={{ width: "100%", height: "100%" }}>
          <Navbar
            style={{ position: "relative", width: "100%" }}
            collapseOnSelect
            expand="lg"
            bg="dark"
            variant="dark"
          >
            <Container fluid>
             
              <Navbar.Brand className="fontstyle" href="#">
                The NewBook

              </Navbar.Brand>
            
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                ></Nav>
                <Button className="style" variant="light">
                  <img src={img2} alt="" />
                </Button>
                <NavLink className="stylep" to="/store">
                  {" "}
                  <img src={img6} alt="" />
                </NavLink>
               
                {/* <Button className="style"variant="light"><img src={img4} alt="" /></Button>  */}

                <div className="dropdown">
                  <Button className="style" name="Notification" variant="light">
                    <img src={img} alt="" />
                  </Button>
                  <div class="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                  </div>
                </div>
                <NavLink className="stylep" to="/profile">
                  {" "}
                  <img src={img5} alt="" />
                </NavLink>

                <Button
              id="myInput"
                  style={{ display: "flex" }}
                  className="style"
                  variant="light">
                  <img src={img3} alt="" height="26px" width="23px" />
                  <input className="input" placeholder="Search" type="text" />
                </Button>

                <div className="dropdown">
                  <Button class="dropbtn" className="style" variant="light">
                    <img src={img1} alt="" />
                  </Button>
                  <div class="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                  </div>
                </div>

                <Button className="style" style={{width:"42px"}}variant="light">
                  ?
                </Button>
                <Button className="styleng"variant="primary"onClick={handleShow}>Cart<img style={{ margin: "5px" }} 
                src={Cart} /></Button>
               

                <Offcanvas show={show} onHide={handleClose}>
                  <Offcanvas.Header closeButton>
                    {/* <Offcanvas.Title>Cart</Offcanvas.Title> */}
                    <h1>CART</h1>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <a className="butstyle" activeClassName="active">
                      Cart
                    </a>
                    <a className="butstyle" activeClassName="active">
                      Your Order
                    </a>
                    <a className="butstyle" activeClassName="active">
                      Track Order
                    </a>
                    <a className="butstyle" activeClassName="active">
                      Filter
                    </a>
                    <a className="butstyle" activeClassName="active">
                      Services
                    </a>
                    <a className="butstyle" activeClassName="active">
                      Products
                    </a>
                    <a className="butstyle" activeClassName="active">
                      Terms and Condition
                    </a>
                  </Offcanvas.Body>
                </Offcanvas>
                <Form className="d-flex"></Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
      <div className="grid-container" >
<div className="ref1" style={{boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",marginTop:"40px"}}>

</div>


      <div className="ref">
    
        <Navbar className="status" >
          <Button className="stbuts">
            <label>
            <img
              className="add"
              style={{ width: "27px" }}
              src={status}
              alt=""
              
            />
            <video src={file} style={{display:"hidden"}}  width="320" height="240" controls>
              <input type="file"  onChange={importVideo} style={{display:"none"}} />
            </video>
            </label>
            
            
          </Button>
          <Navbar.Toggle />
          <div className="line"></div>
          <Button className="stbut"></Button>
          <Button className="stbut"></Button>
          <Button className="stbut"></Button>
          <Button className="stbut"></Button>
          <Button className="stbut"></Button>
          <Button className="stbut"></Button>
          <Button className="stbut"></Button>
          <Button className="stbut"></Button>
          <Button className="stbut"></Button>
          <div className="line"></div>
          <Button style={{ marginLeft: "8px" }} variant="dark">
            More...!
          </Button>

          <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
        </Navbar>
        <Container className="mainpost">
          <h1>Post</h1>
          <h1>hello world </h1>
          <h1>hello world </h1>
          <h1>hello world </h1>
          <Button
            className="cart"
            style={{ marginLeft: "700px", marginTop: "100px" }}
            variant="primary"
          >
            Post{" "}
          </Button>
          <h1>hello world </h1>
          <h1>hello world </h1>
          <h1>hello world </h1>
        </Container>
      
      </div>
      <div className="ref2"style={{boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",marginTop:" 40px"}}></div>
      </div>
    </>
  );
};

export default Main;
