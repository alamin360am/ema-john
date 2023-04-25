import React, { useEffect, useState } from 'react';
import './shop.css';
import Product from '../../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    return (
        <section className="section-shop">
            <div className="grid shop-container">
                <div className="product-container grid col-3">
                    {
                        products.map(product=> <Product
                            key={product.id}
                            product={product}
                        ></Product>)
                    }
                </div>
                <div className="product-summary">
                    <h4>Order Summary</h4>
                </div>
            </div>
        </section>
    );
};

export default Shop;