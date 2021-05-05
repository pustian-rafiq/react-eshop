import React, { Component, Fragment } from 'react';
import Details from '../components/Details';
import Navbar from '../components/Navbar';

class DetailsPage extends Component {
    render() {
        return (
            <Fragment>
                <Navbar/>
                <Details/>
            </Fragment>
        );
    }
}

export default DetailsPage;