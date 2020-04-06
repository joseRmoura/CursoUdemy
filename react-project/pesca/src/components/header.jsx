import React from 'react'
import './header.css'
import Logo from '../image/fish1.png'

export default () =>
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <button className="navbar-toggler tg" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active" >
                    <a className="nav-link" href="/" style={{ color: 'white', fontSize: '20px' }}>Home</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="#" style={{ color: 'white', fontSize: '20px' }}>Features</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="#" style={{ color: 'white', fontSize: '20px' }}>Pricing</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="#" style={{ color: 'white', fontSize: '20px' }}>Disabled</a>
                </li>
            </ul>
        </div>
        <a href="/" className="imglogo">
        <img src={Logo} class="img-fluid" alt="Responsive image"></img>
        </a>
    </nav>