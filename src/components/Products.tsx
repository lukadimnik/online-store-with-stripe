import React, { useState, useEffect } from "react";

const Products = () => {
    const [products, setProducts] = useState([]);



    return <div className="products-layout">
        <h1>Products</h1>
        <p>Take a look at our products</p>
        <div className="products-grid">

        </div>
    </div>;
}

export default Products;