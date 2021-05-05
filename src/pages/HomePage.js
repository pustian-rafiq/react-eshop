import React, { Component, Fragment } from 'react'
import Navbar from '../components/Navbar';
import Product from '../components/Product';
import Details from '../components/Details';
import Cart from '../components/Cart';
import ProductList from '../components/ProductList';
export default class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <Navbar/>
                <Product/>
                <Details/>
                <Cart/>
                <ProductList/>
            </Fragment>
        )
    }
}
