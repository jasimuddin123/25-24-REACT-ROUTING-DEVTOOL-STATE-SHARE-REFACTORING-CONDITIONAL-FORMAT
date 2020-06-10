import React from 'react';
import './Product.css';

const Product = (props) => {

    const { name, price, img, stock, seller } = props.product;

    // console.log(props.product);
    return (
        <div className="product">
            <div >
                <img src={img} alt=""/>
            </div>
            <div>
                <h3>{name}</h3>
                <br/>
                <p>By:{seller}</p>
                <br/>
                <p>Price: ${price}</p>
                <h3>Only {stock} Order Soon -Now</h3>
                <button className="main-button" onClick={()=>props.addHandleProduct(props.product)}>Buy Now</button>
            </div>
        </div>
    );
};

export default Product;