import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const TestApi = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://45.138.24.15:9000/api/products')
            .then(res => {
                setProducts(res.data);
                console.log(res.data);
            })
            .catch(err => console.log(err.message))
    }, [])

    return (
        <div>
            {
                products.map(product => 
                    <div key={product._id}>
                        <img src={product.image} alt='product' />
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                    </div>
                )
            }
        </div>
    );
}

export default TestApi;
