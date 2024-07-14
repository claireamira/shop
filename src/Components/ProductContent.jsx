import React from "react";
import Navbar from 'src/Components/Navbar';
import { useLocation } from 'react-router-dom';

const ProductContent = () => {
    const location = useLocation();
    const details = location.state;
    console.log(details);

    return (
        <>
            <Navbar/>
            <div className="productContentCard">
                <img src={details.images[0]} style={{width: "400px", height: "auto"}} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{details.title}</h5>
                    <h5>$ {details.price}</h5>
                    <p className="card-text">{details.description}</p>
                    <a href="#" className="btn btn-primary">Add to Cart</a><br />
                </div>
            </div>
        </>
    );
};

export default ProductContent;
