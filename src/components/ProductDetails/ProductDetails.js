import React from 'react';
import productImg from '../../images/product-img.jpg'
import './ProductDetails.css'
import useReviews from '../../hooks/useReviews'
import Review from '../Review/Review';
import { useNavigate } from 'react-router-dom';

const ProductDetails = () => {
    const [reviews, setReviews] = useReviews();
    const newReviews = reviews.splice(0, 3);

    const navigate = useNavigate();
    const handleSeeAllReviews = () => {
        navigate('/reviews');
    }

    return (
        <div>
            <div className="product-container">
                <div className='product-details-container'>
                    <div className="product-details">
                        <h1>Make the right decision</h1>
                        <h1><span className='theme-color'>Buy MacBook Pro</span></h1>
                        <p>The M1 chip makes MacBook Pro outrageously fast and powerful. Its 8-core CPU rips through complex workflows and heavy workloads, with up to 2.8x faster processing performance than the previous generation2 — all with unbelievable energy efficiency.</p>
                    </div>
                    <button>Live Demo</button>
                </div>
                <div>
                    <img src={productImg} alt="" />
                </div>
            </div>
            <div className='reviews-container'>
                <h1>Customer Review({newReviews.length})</h1>
                <div className="reviews">
                    {
                        newReviews.map(review => <Review key={review.customerId} review={review}></Review>)
                    }
                </div>
                <button onClick={handleSeeAllReviews} className='all-review-btn'>See All Reviews</button>
            </div>
        </div>
    );
};

export default ProductDetails;