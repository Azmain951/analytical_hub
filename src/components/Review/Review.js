import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Review.css'

const Review = ({ review }) => {
    const { customerImg, customerRatings, customerName, customerReview } = review;
    return (
        <div className='review-container'>
            <div className='customer-details'>
                <img src={customerImg} alt="" />
                <h5>{customerName}</h5>
            </div>
            <div className='review-details'>
                <p className='rating'>
                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    <span>({customerRatings})</span>
                </p>
                <p className='review'><small>{customerReview}</small></p>
            </div>
        </div>
    );
};

export default Review;