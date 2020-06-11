import React from 'react';

const ReviewItem = (props) => {
    const {name,quantity} = props.product;
    const reviewItemStyle = {
        borderBottom:'1px solid lightGray',
        marginBottom:'5px',
        paddingBottom:'5px',
        marginLeft:'20px',
    }
    return (
        <div>
            <h4 style ={reviewItemStyle}className="product-name">{name}</h4>
            <p>Quantity : {quantity}</p>
            <br/>
            <button className="main-button">remove</button>

        </div>
    );
};

export default ReviewItem;