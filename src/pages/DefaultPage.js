import React, { Component, Fragment } from 'react';
import Navbar from '../components/Navbar';
import Default from '../components/Default';

class DefaultPage extends Component {
    render() {
        return (
            <Fragment>
                <Navbar/>
                <Default/>
            </Fragment>
        );
    }
}

export default DefaultPage;