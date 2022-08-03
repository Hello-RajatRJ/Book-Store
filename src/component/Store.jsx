import React from "react";
import { useState } from "react";
import { NavLink} from "react-router-dom";

import {
  Navbar,
  Container,
  Button,
  Nav,
  Form,
  NavDropdown,
  DropdownButton,
} from "react-bootstrap";
import Cart from "../Assets/cart-70-16.ico";
import img from "../Assets/bell.svg";
import img1 from "../Assets/gear.svg";
import img2 from "../Assets/plus-circle-dotted.svg";
import img3 from "../Assets/search.svg";

import img5 from "../Assets/person-circle.svg";
import img6 from "../Assets/shop.svg";
import { Offcanvas } from "react-bootstrap";
import Product from "./Product";
import "./store.css";
import Products from "./Products";
import { Routes, Route } from "react-router-dom";

const Store = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="bg">
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
              <NavLink to="/main">
              <Navbar.Brand className="fontstyle" href="#">
                The NewBook

              </Navbar.Brand>
              </NavLink>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: "100px" }}
                  ></Nav>
                  <Button className="style" variant="light">
                    <img src={img2} alt="" />
                  </Button>
                  <NavLink className="stylep" to="/products">
                    {" "}
                    <img src={img6} alt="" />
                  </NavLink>

                  {/* <Button className="style"variant="light"><img src={img4} alt="" /></Button>  */}

                  <div className="dropdown">
                    <Button
                      className="style"
                      name="Notification"
                      variant="light"
                    >
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
                    style={{ display: "flex" }}
                    className="style"
                    variant="light"
                  >
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

                  <Button
                    className="style"
                    style={{ width: "42px" }}
                    variant="light"
                  >
                    ?
                  </Button>
                  <Button
                    className="styleng"
                    variant="primary"
                    onClick={handleShow}
                  >
                    Cart
                    <img style={{ margin: "5px" }} src={Cart} />
                  </Button>

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
        <div className="hero bg-white">
          <Products />
          
        </div>
      </div>
    </>
  );
};

export default Store;
