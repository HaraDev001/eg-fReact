import React from 'react';
import PropTypes from 'prop-types';
import Item from '../item/item';
import './cartpage.css';

function CartPage({ items,onRemoveOne,onAddOne }) {
    return (
        <ul className="CartPage-items">
            {items.map(item =>
                <li key={item.id} className="CartPage-item">
                    <Item item={item}>
                        <div className="CartItem-controls">
                            <button  className="CartItem-removeOne"  onClick={() => onRemoveOne(item)}>&ndash;</button>
                                <span className="CartItem-count">{item.count}</span>
                            <button  className="CartItem-addOne"     onClick={() => onAddOne(item)}>+</button>
                        </div>
                    </Item>
                </li>
            )}
        </ul>
    );
}
CartPage.propTypes = {
    items: PropTypes.array.isRequired,
    onRemoveOne: PropTypes.func.isRequired,
    onAddOne: PropTypes.func.isRequired
};
export default CartPage;