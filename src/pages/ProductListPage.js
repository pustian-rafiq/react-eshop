import React, { Component, Fragment } from 'react';
import Navbar from '../components/Navbar';
import Product from '../components/Product';

class ProductListPage extends Component {
    render() {
        return (
            <Fragment>
                <Navbar/>
                <Product/>
                
            </Fragment>
        );
    }
}

export default ProductListPage;