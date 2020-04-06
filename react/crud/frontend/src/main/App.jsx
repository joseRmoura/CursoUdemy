import './App.css'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'

import Routes from './routers'
//import Home from '../components/home/Home'
import Logo from '../components/template/logo'
import Nav from '../components/template/nav'
import Footer from '../components/template/footer'


export default props =>
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>