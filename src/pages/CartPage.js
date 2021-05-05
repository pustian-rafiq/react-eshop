import React, { Component, Fragment } from 'react';
import Cart from '../components/Cart';
import Navbar from '../components/Navbar';

class CartPage extends Component {
    render() {
        return (
            <Fragment>
                <Navbar/>
                <Cart/>
                
            </Fragment>
        );
    }
}

export default CartPage;