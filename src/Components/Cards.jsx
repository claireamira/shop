import React from "react";
import { Link } from 'react-router-dom';

const Productcard = ({ details }) => {
    return (
        <>
            <div className="card">
                <img src={details.images[0]} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{details.title}</h5>
                    <h5>$ {details.price}</h5>
                    <p className="card-text">{details.description}</p>
                    <Link to="/ProductContent" state={details} className='card-link'>View Details </Link>
                </div>
            </div>
        </>
    );
};

export default Productcard;
