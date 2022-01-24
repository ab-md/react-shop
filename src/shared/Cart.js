import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { myAlert } from '../assets/scripts/MyAlert';
import { myToastyAlert } from '../assets/scripts/MyAlert';
import { clearCart, decreament, deleteFromCart, increament } from '../redux/cart/actions';
import { quantityCount } from '../assets/scripts/functions';

import '../assets/styles/cart.css';
import cartLogo from '../assets/images/icons/shopping-basket-solid.svg';
import trashIcon from '../assets/images/icons/trash-alt-solid.svg';

const Cart = () => {

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cartState);

    const increase = (productId) => {
        dispatch(increament(productId));
        myToastyAlert('سبد خرید بروز شد.', 'success');
    }

    const decrease = (productId) => {
        dispatch(decreament(productId));
        myToastyAlert('سبد خرید بروز شد.', 'warning');
    }

    const deleteItem = (product) => {
        dispatch(deleteFromCart(product));
        myToastyAlert('محصول از سبد خرید پاک شد!', 'warning');
    }

    const handleClearCart = () => {
        dispatch(clearCart());
        myAlert('سبد خرید خالی ایست!', 'error');
    }

    return (
        <>
            {cart.cart.length ?
                <div className='cart-container' dir='ltr'>
                    <div className='cart-rows cart-header'>
                        <p>Product</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Subtotal</p>
                        <p>Remove</p>
                    </div>

                    {
                        cart.cart && cart.cart.map(product =>
                            product.qty &&
                            <div key={product._id} className='cart-rows cart-products'>
                                <div className='cart-products-info'>
                                    <img src={product.image} alt='cart-product' />
                                    <div>
                                        <p className='product-name'>{product.name}</p>
                                        <p>{product.description}</p>
                                    </div>
                                </div>
                                <p>
                                    <span className='cart-subInfo'>Price: </span>
                                    {product.price}
                                </p>
                                <div className='button-container' dir='rtl'>

                                    {
                                        product.countInStock > 0 &&
                                        product.qty < product.countInStock &&
                                        <button className='small-button'
                                            onClick={() => increase(product._id)}
                                        ><span>+</span></button>
                                    }

                                    <span className='counter'>{product.qty}</span>

                                    {
                                        quantityCount(cart, product._id) === 1 &&
                                        <button className='small-button'>
                                            <img src={trashIcon} alt='delete' onClick={() => deleteItem(product._id)} />
                                        </button>
                                    }
                                    {
                                        quantityCount(cart, product._id) > 1 &&
                                        <button className='small-button'
                                            onClick={() => decrease(product._id)}
                                        ><span>-</span></button>
                                    }

                                </div>

                                <p>
                                    <span className='cart-subInfo'>Subtotal: </span>
                                    {(product.price * product.qty).toFixed(2)}
                                </p>

                                <div>
                                    <button className='btn btn-danger'
                                        onClick={() => deleteItem(product._id)}
                                    >Remove</button>
                                </div>
                            </div>
                        )
                    }

                    <div className='cart-footer'>
                        <div>
                            <button className='btn btn-dark'
                                onClick={() => handleClearCart()}>Discard cart</button>
                        </div>
                        <div>
                            <p>total: {cart.total} </p>
                        </div>
                        <div>
                            <Link
                                to='/payment'
                                // to={Object.keys(user.data).length ? '/payment' : '/login'}
                                className='btn btn-success'>Checkout</Link>
                        </div>
                    </div>
                </div>
                :
                <div className='m-5 empty-cart'>
                    <div className='alert alert-danger text-center'>سبد خرید خالیست!</div>
                    <div className='container' style={{ display: 'flex' }}>
                        <img style={{ width: '300px' }}
                            className='cart-logo shopping-basket' src={cartLogo} alt='logo' />
                    </div>
                    <div className='d-flex mt-3'>
                        <Link to='/shop' className='btn btn-primary'>رفتن به فروشگاه</Link>
                    </div>
                </div>
            }
        </>
    );
}

export default Cart;
