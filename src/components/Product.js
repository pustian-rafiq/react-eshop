import React, { Component, Fragment } from 'react';
import { Container } from 'react-bootstrap';
class Product extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <h2 className="bg-danger">Hello Product</h2>
                </Container>
            </Fragment>
        );
    }
}

export default Product;