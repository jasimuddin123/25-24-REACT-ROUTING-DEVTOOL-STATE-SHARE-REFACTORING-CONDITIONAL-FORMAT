import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

      const addHandleProduct =(product)=>{
         
        const newCart = [...cart,product];
        setCart(newCart);
      }
    return (
        <div className="product">
          <div className="product-container">
              { products.map(pd => <Product
              showAddToCart={true}
              addHandleProduct ={addHandleProduct}
              product={pd}>    
              </Product>) }
          </div>

          <div>
              
              
              <Cart cart={cart}> </Cart>
          </div>
        </div>
    );
};

export default Shop;