import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className='all-reviews-container'>
            <h1>What our customers say!</h1>
            <div className='all-reviews'>
                {
                    reviews.map(review => <Review key={review.customerId} review={review}></Review>)
                }
            </div>

        </div>
    );
};

export default Reviews;