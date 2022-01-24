import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Payed = () => {

    const bught = useSelector(state => state.paymentState);

    console.log(bught);

    return (
        <div>
            <div className='container alert alert-success mt-3 text-center text-dark'>پرداخت با موفقیت  انجام شد.</div>
            <div style={{textAlign: 'center'}}>
                <Link to='/' className='btn btn-dark'>بازگشت</Link>
            </div>
        </div>
    );
}

export default Payed;
