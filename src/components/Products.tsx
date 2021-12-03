import { useState, useEffect } from "react";
import useFetch from '../helpers/UseFetch';
import Product from './Product';
import Loader from './UI/Loader';

interface StoreProduct {
    id: number;
    name: string;
    price: number;
    image: string;
}

const Products = () => {
    const [products, setProducts] = useState([]);

    const { loading, get } = useFetch('http://localhost:3001')

    useEffect(() => {
        get('products')
            .then(data => {
                console.log(data)
                setProducts(data)
            })
            .catch(err => console.log('Could not fetch products', err))
    }, [])

    const productsList = () => {
        return products.map(item => <Product key={item.id} {...item} />)
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