import React from 'react'
import { useState,useEffect } from 'react';
import { useParams,NavLink } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { addCart,delCart } from './redux/action';

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
  import star from '../Assets/star-fill.svg'
  import img5 from "../Assets/person-circle.svg";
  import img6 from "../Assets/shop.svg";
  import { Offcanvas } from "react-bootstrap";
  import axios from 'axios'
  import Skeleton from "react-loading-skeleton";






const Product = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const {id}= useParams();
    const [product,setProduct]=useState([""]);
    const [loading ,setLoading] =useState(false);
  const dispatch = useDispatch();
  const addProduct=(Product)=>{
    dispatch(addCart(Product));
  }
    
useEffect(()=>{
    const getProduct = async ()=>{
        setLoading(true);
        // console.log(id);
        const res = await axios.get(`https://62e10ae3fa99731d75cc32ce.mockapi.io/books/store/${id}`)
        console.log("id",res.id);
        setProduct(res.data);
        setLoading(false);
    }
    getProduct();
},[])
// console.log('products', product)
const Loading =()=>{
    return(
        <>
           <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6">
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50}  />
          <Skeleton width={150} />
          <Skeleton height={50} width={100} />
          <Skeleton height={50} width={100} style={{marginLeft:6}} />

        </div>
      
        
        </>
    )
}
const ShowProduct = ()=>{
    return(
        <>
       
        <div className="col-md-6 " >
            <img src={product.image} alt={product.title} height="400px" width="400px" />
                  </div>
                  <div className='col-md-6'>
                  <h4 className='text-uppercase text-black-50'>{product.category}</h4>
                  <h1 className='display-5'> {product.title} </h1>
                  <p className="lead"> Rating{product.rating}
                  <img src={star}></img>
                   </p>
                   <h3 className='display-6 fw-bold my-4'>₹{product.price}</h3>
                   <p className='lead'> {product.description} </p>
                  <button className="btn btn-outline-success "
                    // onClick={()=>addProduct(product)}
                    >Add to Cart </button>
                    <button className="btn btn-outline-danger m-2">Go to Cart</button>
                    <NavLink to="/IncDec">INC</NavLink>
                  </div>
           
          
        </>
    )
}
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
                      {/* <Offcanvas.id>Cart</Offcanvas.id> */}
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
        </div>

    <div>
        <div className="container">
            <div className="row">
                {loading?<Loading/>:<ShowProduct/>}
            </div>
        </div>

    </div>
    </>
  )
}

export default Product