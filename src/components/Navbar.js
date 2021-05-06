import React, { Component } from 'react'
// import { Container } from 'react-bootstrap'
import '../asset/css/bootstrap.min.css'
import {Link} from 'react-router-dom'
import logo from '../logo.svg'

export default class Navbar extends Component {
    render() {
        return (
            
               <nav className="nav navbar-expand-sm bg-primary navbar-dark px-sm-5">
                   <Link to="/">
                        <img src={logo} alt="logo"/>

                   </Link>
                   <ul className="navbar-nav align-items-center">
                       <li className="nav-item ml-5">
                           <Link to="/" className="nav-link">
                                Products
                           </Link>
                       </li>
                   </ul>

                   <Link to="/" className="ml-auto">
                        <button>
                            <i className="fas fa-cart-plus" />
                        </button>
                    </Link>

               </nav>
                
         
        )
    }
}
