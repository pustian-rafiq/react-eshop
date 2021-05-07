import React from 'react'
// import logo from './logo.svg';
//import './App.css';
import './asset/css/custom.css'
// import Navbar from './components/Navbar';
// import Product from './components/Product';
// import Details from './components/Details';
// import Cart from './components/Cart';
// import ProductList from './components/ProductList';
import AppRoute from './router/AppRoute';
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
     <BrowserRouter>
     
        <AppRoute/>
     
     </BrowserRouter>
  );
}

export default App;
