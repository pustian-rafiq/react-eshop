import React, { Component, Fragment } from 'react';
import { Container } from 'react-bootstrap';
class Cart extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <h2 className="bg-danger">Hello Cart</h2>
                </Container>
            </Fragment>
        );
    }
}

export default Cart;