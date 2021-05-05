import React, { Component, Fragment } from 'react'
import {Route, Switch} from 'react-router-dom';
import HomePage from '../pages/HomePage'
import ProductPage from '../pages/ProductPage'
import DetailsPage from '../pages/DetailsPage'
import ProductListPage from '../pages/ProductListPage'
import DefaultPage from '../pages/DefaultPage'
import CartPage from '../pages/CartPage'

export default class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/product" component={ProductPage} />
                    <Route exact path="/details" component={DetailsPage} />
                    <Route exact path="/product-list" component={ProductListPage} />
                    <Route exact path="/default" component={DefaultPage} />
                    <Route exact path="/cart" component={CartPage} />  
                </Switch>
            </Fragment>
        )
    }
}
