import React, { Component } from 'react'
// import { Container } from 'react-bootstrap'
import '../asset/css/bootstrap.min.css'
import {Link} from 'react-router-dom'
import logo from '../logo.svg'
import styled from 'styled-components'
import {ButtonContainer} from './Button'
export default class Navbar extends Component {
    render() {
        return (
            
               <NavWrapper className="nav navbar-expand-sm   navbar-dark px-sm-5 p-3">
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
                       <ButtonContainer>
                           <span className="ml-2">
                           <i className="fas fa-cart-plus" />
                           </span>
                           my cart
                          
                       </ButtonContainer>
                    
                    </Link>

               </NavWrapper>
                
         
        )
    }
}

const NavWrapper = styled.nav`
    background: var(--mainBlue);
    .nav-link{
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }

`;