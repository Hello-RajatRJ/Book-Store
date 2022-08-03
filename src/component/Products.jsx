import { useState, useEffect } from "react";
import React from "react";
import download from "../Assets/buf.gif";
import Skeleton from "react-loading-skeleton";
import { NavLink, Routes, Route } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      var res = await fetch(`https://62e10ae3fa99731d75cc32ce.mockapi.io/books/store`);
      if (componentMounted) {
        res = await res.json(data);
        console.log(res);
        setData(await res);
        setFilter(await res);
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);
  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="button">
          <div
            className="button btn btn-outline-dark"
            onClick={() => setFilter(data)}
          >
            all
          </div>
          <div
            className="button btn btn-outline-dark me-2"
            onClick={() => filterProduct("mystery novels/detective stories")}
          >
            Mystery/Detective
          </div>
          <div
            className="button btn btn-outline-dark me-2"
            onClick={() => filterProduct("novels")}
          >
            Novels
          </div>
          <div
            className="button btn btn-outline-dark me-2"
            onClick={() => filterProduct("thriller/horrors/suspense stories")}
          >
            Crime Thriller and Horror
          </div>
          <div
            className="button btn btn-outline-dark me-2"
            onClick={() => filterProduct("humorous stories")}
          >
            Humorous Stories
          </div>
          <div
            className="button btn btn-outline-dark me-2"
            onClick={() => filterProduct("love stories")}
          >
            Love Stories
          </div>
          <div
            className="button btn btn-outline-dark me-2"
            onClick={() => filterProduct("adventure stories")}
          >
            Adventure Stories
          </div>
          <div
            className="button btn btn-outline-dark me-2"
            onClick={() => filterProduct("drama")}
          >
            Drama
          </div>
          <div
            className="button btn btn-outline-dark me-2"
            onClick={() => filterProduct("comedy")}
          >
            Comedy
          </div>
          <div
            className="button btn btn-outline-dark me-2"
            onClick={() => filterProduct("fairytale")}
          >
            Fairy Tale
          </div>
          <div
            className="button btn btn-outline-dark me-2"
            onClick={() => filterProduct("legend")}
          >
            Legend
          </div>
          <div
            className="button btn btn-outline-dark me-2"
            onClick={() => filterProduct("myth")}
          >
            Myth
          </div>
          <div
            className="button btn btn-outline-dark me-2"
            onClick={() => filterProduct("comics")}
          >
            Comics
          </div>
          <div
            className="button btn btn-outline-dark me-2"
            onClick={() => filterProduct("encyclopedia")}
          >
            Encyclopedia
          </div>
          <div
            className="button btn btn-outline-dark me-2"
            onClick={() => filterProduct("biography")}
          >
            Biography
          </div>
          <div
            className="button btn btn-outline-dark me-2"
            onClick={() => filterProduct("dictionary")}
          >
           Dictionary
          </div>
          <div
            className="button btn btn-outline-dark me-2"
            onClick={() => filterProduct("magazines")}
          >
           Magazines
          </div>
          <div
            className="button btn btn-outline-dark me-2"
            onClick={() => filterProduct("news papers")}
          >
           News Paper
          </div>
          <div
            className="button btn btn-outline-dark me-2"
            onClick={() => filterProduct("sciencefictionnovels")}
          >
           Science Fiction
          </div>
        </div>
        {filter.map((products, itm) => {
          return (
            <div className="col-md-3" key={itm} style={{marginBottom:"20px"}}>
              <div class="card h-100 text-center p-4"key={products.id}
                style={{ width: "18rem" }}>
                  
                <NavLink to={`/products/${products.id}`}><img
                  width="18rem"
                  height="250px"
                  src={products.image}
                  class="card-img-top"
                  alt={products.title}
                  /></NavLink>

                <div class="card-body">

                  <NavLink className="card-title mb-0 text-decoration-none " style={{color :"black"}}to={`/products/${products.id}`}>
                  <h5 class="card-title mb-0">{products.title.substring(0)}</h5>
                  </NavLink>

                  <p class="card-text ">₹{products.price}</p>

                  <NavLink to={`/products/${products.id}`}>
                    <a className="btn btn-outline-dark">Buy Now</a>
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div className="row justify-content-center">
      {loading ? <Loading /> : <ShowProducts />}
    </div>
  );
};

export default Products;
