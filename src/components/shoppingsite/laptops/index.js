import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import Item from './item/item.js';

function LaptopPage({items, onAddToCart}){
   
    return(
        <ul className="ItemPage-items">
            {
            items.map(item =>
                <li key={item.id} className="ItemPage-item">
                    <Item item={item}>
                        <button  className="Item-addToCart"  onClick={()=>onAddToCart(item)} >
                            Add to Cart
                        </button>
                    </Item>
                </li>
            )}
        </ul>
    )
}

LaptopPage.propTypes = {
    items: PropTypes.array.isRequired
}

export default LaptopPage;