import React from 'react';
import NavTabs from './NavTabs';

import ShirtPage from './shirts';
import LaptopPage from './laptops';
import CartPage from './laptops/cart/cartpage'

import {shirt_products} from './data-shirt';
import {laptop_products} from './data-laptop';
import {connect} from 'react-redux';
import {addProduct, removeProduct} from '../../services/shoppingsite/actions';

import './index.css';

function mapStateToProp(state){
    return state;
}

const mapDispatchToProp=(dispatch)=>{
    return{
        addProduct: product=>dispatch(addProduct(product)),
        removeProduct: product=>dispatch(removeProduct(product))
    }
}

class ShoppingSite extends React.Component {
     
     cart = [...this.props.cart];
     total = this.props.total;
  
     state = {
         activeTab:0
     };

    handleTabChange=(index)=>{
        this.setState({activeTab:index});
    }

    // handleAddToCart = (item)=>{
    //     let total = Math.floor(this.total + item.price);
    //     this.setState({
    //         cart:[...this.cart, item.id],
    //         total:total
    //     })
    // }

    // handleRemoveOne = (item) => {
    //     let total = Math.floor(this.total - item.price);
    //     let index = this.cart.indexOf(item.id);
    //     this.setState({
    //         cart: [
    //             ...this.state.cart.slice(0, index),
    //             ...this.state.cart.slice(index + 1)
    //         ],
    //         total:total
    //     });
    // }

    render() {
        this.cart = [...this.props.cart];
        this.total = this.props.total;
        console.log(this.cart,this.total);
        return (
            <div className="App">
                <NavTabs activeTab={this.state.activeTab} onTabChange={this.handleTabChange} cartCount={this.cart.length} total = {this.total}/>
                <main className="App-content">
                    {this.renderContent()}
                </main>
            </div>
        );
    }

    renderContent() {
        switch(this.state.activeTab)
        {
            default:
            // case 0: return <ShirtPage items = {shirt_products}/>;
            case 1: return <LaptopPage items = {laptop_products} onAddToCart={this.props.addProduct}/>;
            case 2: return this.renderCart();
        }
    }
    
    renderCart(){
        let itemCounts = this.cart.reduce((itemCounts, itemId) => {
                itemCounts[itemId] = itemCounts[itemId] || 0;
                itemCounts[itemId]++;
                return itemCounts;
        }, {});

        // Create an array of items
        let cartItems = Object.keys(itemCounts).map(itemId => {
            // Find the item by its id
            var item = laptop_products.find(item => item.id === parseInt(itemId, 10));
            // Create a new "item" that also has a 'count' property
            return { ...item,  count: itemCounts[itemId]}
        });
        
        return(
            cartItems.length === 0 ? <span>There is no any products in Cart.</span>:
                <CartPage items={cartItems} onAddOne={this.props.addProduct} onRemoveOne={this.props.removeProduct} />
        );
    }
}
export default connect(mapStateToProp, mapDispatchToProp)(ShoppingSite);