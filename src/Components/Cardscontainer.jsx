import React, { useState, useEffect } from "react";
import Productcard from "./Cards";
import { Link } from 'react-router-dom';
import ProductContent from "./ProductContent";

const ProductContainer = () => {
    // An array to store our products - useState
    const [products, setProducts] = useState([]);

    // useEffect => queries data as we load
    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setProducts(data.products); 
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    return (
        <>
            <div className="container">
                <div className="row justify-content-around">
                    {products.map((prod, index) => (
                        <div className="col-md-3 mb-3" key={index}>
                            <Productcard details={prod} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ProductContainer;
