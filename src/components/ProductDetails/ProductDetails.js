import React from 'react';
import productImg from '../../images/product-img.jpg'
import './ProductDetails.css'
import useReviews from '../../hooks/useReviews'
import Review from '../Review/Review';

const ProductDetails = () => {
    const [reviews, setReviews] = useReviews();
    const newReviews = reviews.splice(0, 3);
    return (
        <div>
            <div className="product-container">
                <div className='product-details-container'>
                    <div className="product-details">
                        <h1>Make the best decision</h1>
                        <h1><span className='theme-color'>Buy Apple Laptop</span></h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt quidem laboriosam excepturi quod ex ipsum libero, doloremque delectus veritatis eum corrupti magnam? Quisquam, atque recusandae</p>
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
                <button className='all-review-btn'>See All Reviews</button>
            </div>
        </div>
    );
};

export default ProductDetails;