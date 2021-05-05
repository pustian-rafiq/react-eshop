import React, { Component, Fragment } from 'react';
import { Container } from 'react-bootstrap';

class Default extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <h2 className="bg-danger">Hello Default</h2>
                </Container>
            </Fragment>
        );
    }
}

export default Default;