import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import singleProductAction from '../../redux/single_product/singleProductAction';
import { myAlert, myToastyAlert } from '../scripts/MyAlert';
import { addToCart, decreament, deleteFromCart, increament } from '../../redux/cart/actions';
import { condition, quantityCount } from '../scripts/functions';

import '../styles/details.css';
import trashIcon from '../images/icons/trash-alt-solid.svg';
import loadingGif from '../images/loading/Spinner-colorful.svg';

const Details = () => {

    const { id } = useParams();
    // console.log(id);

    const dispatch = useDispatch();
    const singleProduct = useSelector(state => state.singleProductState);
    const cartState = useSelector(state => state.cartState);

    useEffect(() => {
        dispatch(singleProductAction(id));
    }, [dispatch, id])

    const product = singleProduct.productData;
    const { image, name, description, price, category, countInStock, brand, _id } = product;

    // let condition = 0;

    // const quantityCount = (cartState, _id) => {
    //     const index = cartState.cart.findIndex(item => item._id === _id);
    //     if (index === -1) {
    //         return false
    //     } else {
    //         condition = cartState.cart[index].qty;
    //         return condition;
    //     }
    // }

    const buyProduct = (product) => {
        dispatch(addToCart(product));
        myToastyAlert('محصول به سبد خرید افزوده شد.', 'success');
    }

    const increase = (productId) => {
        dispatch(increament(productId));
        myToastyAlert('سبد خرید بروزرسانی شد.', 'success');
    }

    const decrease = (productId) => {
        dispatch(decreament(productId));
        myToastyAlert('سبد خرید بروزرسانی شد.', 'warning');
    }

    const deleteProduct = (product_id) => {
        dispatch(deleteFromCart(product_id));
        myToastyAlert('محصول از سبد خرید حذف شد!', 'error');
    }

    return (
        <>
            {
                singleProduct.loading ?
                    <div className='loading-container'>
                        <img src={loadingGif} alt='loading' />
                    </div>
                    :
                    singleProduct.error ?
                        myAlert('مشکلی پیش آمده است<br />دوباره امتحان کنید.')
                        :
                        <div className='details' dir='ltr'>

                            <div className='details-info'>
                                <img src={image} alt={name} />
                                <div>
                                    <p className='product-name'>{name}</p>
                                    <p>{description}</p>
                                    <div>
                                        <div className='details-price'>
                                            <p>Category: <span className='badge bg-primary'>{category}</span></p>
                                            <span>Price: <span className='badge bg-success'>{price} $</span></span>
                                        </div>
                                        <div className='details-price'>
                                            <p>Brand: <span className='badge bg-primary'>{brand}</span></p>
                                            <span>Count In Stock: <span className='badge bg-success'>{countInStock}</span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='details-button' dir='rtl'>
                                <div className='button-container'>
                                    {
                                        product.countInStock > 0 ?
                                            quantityCount(cartState, _id) && condition >= 1 ?
                                                condition < product.countInStock &&
                                                <button className='small-button'
                                                    onClick={() => increase(_id)}
                                                >
                                                    <span>+</span></button> :
                                                <button className='buy-product'
                                                    onClick={() => buyProduct(product)}
                                                >Buy</button>
                                            :
                                            <p className='text-warning'>Out Of Stock</p>
                                    }
                                    {
                                        quantityCount(cartState, _id) &&
                                        <span className='counter'>{condition}</span>
                                    }
                                    {
                                        quantityCount(cartState, _id) === 1 &&
                                        <button className='small-button'>
                                            <img src={trashIcon} alt='delete' onClick={() => deleteProduct(_id)} />
                                        </button>
                                    }
                                    {
                                        quantityCount(cartState, _id) > 1 &&
                                        <button className='small-button'
                                            onClick={() => decrease(_id)}
                                        >
                                            <span>-</span></button>
                                    }
                                </div>
                                <Link to='/shop' className='btn btn-dark'>Back</Link>
                            </div>
                        </div>
            }
        </>
    );
}

export default Details;
