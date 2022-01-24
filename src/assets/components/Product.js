import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { myToastyAlert } from '../scripts/MyAlert';
import { addToCart, decreament, deleteFromCart, increament } from '../../redux/cart/actions';

import trashIcon from '../images/icons/trash-alt-solid.svg';
import '../styles/products.css';
import { condition, quantityCount, shorten } from '../scripts/functions';


const Product = ({ productData }) => {

    const dispatch = useDispatch();
    const cartState = useSelector(state => state.cartState);

    const buyProduct = (productData) => {
        dispatch(addToCart(productData));
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
        <div className='products' dir='ltr'>
            <div className='products-info'>
                <div className='img-container'>
                    <img src={productData.image} alt='product' style={{ width: '100%' }} />
                </div>
                <p className='product-name mt-3'>{shorten(productData.name)}</p>
                <p style={{ fontWeight: 'bold' }}>{productData.price} $</p>
            </div>
            <div className='products-action'>
                <Link className='btn btn-outline-info' to={`/shop/${productData._id}`}>Product's details</Link>
                <div className='button-container' dir='rtl'>
                    {
                        // isInCart(cartState, productData._id) ?
                        productData.countInStock > 0 ?
                            quantityCount(cartState, productData._id) && condition >= 1 ?
                                condition < productData.countInStock &&
                                <button className='small-button' 
                                    onClick={() => increase(productData._id)}
                                >
                                    <span>+</span></button>
                                :
                                <button className='buy-product'
                                    onClick={() => buyProduct(productData)}
                                >buy</button>
                            : <p className='text-warning'>Out Of Stock</p>
                    }
                    {
                        quantityCount(cartState, productData._id) &&
                        <span className='counter'>{condition}</span>
                    }
                    {
                        quantityCount(cartState, productData._id) === 1 &&
                        <button className='small-button'>
                            <img src={trashIcon} alt='delete' onClick={() => deleteProduct(productData._id)} />
                        </button>
                    }
                    {
                        quantityCount(cartState, productData._id) > 1 &&
                        <button className='small-button'
                            onClick={() => decrease(productData._id)}
                        >
                            <span>-</span></button>
                    }

                </div>
                {/* <Link to={`/shop/${productData._id}`}>جزئیات محصول</Link> */}
            </div>
        </div>
    );
}

export default Product;
