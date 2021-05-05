import React, { Component, Fragment } from 'react';
import { Container } from 'react-bootstrap';

class Details extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <h2 className="bg-danger">Hello Details</h2>
                </Container>
            </Fragment>
        );
    }
}

export default Details;