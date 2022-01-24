import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import productsAction from '../redux/products/productsAction';

import Product from '../assets/components/Product';
import { myAlert } from '../assets/scripts/MyAlert';
import loadingGif from '../assets/images/loading/Spinner-pink.svg';

const MapProducts = () => {

    const dispatch = useDispatch();
    const productsData = useSelector(state => state.getProducts);
    const cart = useSelector(state => state.cartState);

    console.log(cart.cart);

    useEffect(() => {
        if (!productsData.products.length) {
            dispatch(productsAction());
        }
    }, [productsData.products.length, dispatch])

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', marginBottom: '10px' }}>
            {
                productsData.loading ?
                    <>
                        <img src={loadingGif} alt='loading' />
                    </> 
                    :
                    productsData.error ?
                        myAlert('مشکلی پیش آمده است<br/>دوباره امتحان کنید.', 'error')
                        // <p>Something went Wrong!</p> 
                        :
                        productsData.products.map(product =>
                            <Product key={product._id} productData={product} />
                        )
            }
        </div>
    );
}

export default MapProducts;
