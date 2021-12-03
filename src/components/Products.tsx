import { useState, useEffect } from "react";
import useFetch from '../helpers/UseFetch';
import Product from './Product';
import Loader from './UI/Loader';
import axios from 'axios';

interface StoreProduct {
    id: number;
    name: string;
    price: number;
    image: string;
    price_id: number;
    description: string;
}

const Products = () => {
    const [products, setProducts]: [StoreProduct[], any] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get<StoreProduct[]>('http://localhost:3001/products')
            .then(res => {
                setProducts(res.data)
                setLoading(false)
            })
            .catch((err) => console.log(err))
    }, [])

    const productsList = () => {
        return products.map((item) => <Product key={item.id} {...item} />)
    }

    return <div className="products-layout">
        <h1>Products</h1>
        <p>Take a look at our products</p>
        <div className="products-grid">
            {loading && <Loader />}
            {!loading && productsList()}
        </div>
    </div>;
}

export default Products;