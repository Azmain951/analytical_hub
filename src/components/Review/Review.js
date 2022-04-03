import React from 'react';
import './Review.css'

const Review = ({ review }) => {
    const { customerId, customerImg, customerRatings, customerName, customerReview } = review;
    return (
        <div className='review-container'>
            <div className='customer-details'>
                <img src={customerImg} alt="" />
                <h5>{customerName}</h5>
            </div>
            <div className='review-details'>
                <p>{customerRatings}</p>
                <p>{customerReview}</p>
            </div>
        </div>
    );
};

export default Review;