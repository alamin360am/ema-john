import React, { useEffect, useState } from "react";
import "./shop.css";
import Product from "../../Product/Product";
import Cart from "../Cart/Cart";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];

    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);

      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart)
  }, [products]);

  const handleButton = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
  };

  return (
    <section className="section-shop">
      <div className="grid shop-container">
        <div className="product-container grid col-3">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleButton={handleButton}
            ></Product>
          ))}
        </div>
        <div className="product-summary">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </section>
  );
};

export default Shop;
