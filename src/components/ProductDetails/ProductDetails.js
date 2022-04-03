import React from 'react';
import productImg from '../../images/product-img.jpg'
import './ProductDetails.css'

const ProductDetails = () => {
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
        </div>
    );
};

export default ProductDetails;