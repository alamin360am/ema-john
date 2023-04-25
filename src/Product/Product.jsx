import React from 'react';
import './product.css';

const Product = (props) => {

    const {name, seller, price, ratings, img} = props.product;

    return (
        <div className='card'>
            <div className="img-box">
                <img src={img} alt="Product Image" />
            </div>
            <h2>{name}</h2>
            <p className="price">Price: ${price}</p>
            <div className="card-info">
                <p className="company">Manufacturer: {seller}</p>
                <p className="ratings">Ratings: {ratings} star</p>
                <button className="btn">Add to Cart</button>
            </div>
            
        </div>
    );
};

export default Product;