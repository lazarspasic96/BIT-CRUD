import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

import AboutPage from "../AboutPage/AboutPage";

import PostPage from '../Post/PostPage';




class Header extends React.Component {

    render() {
        return <header className="page-header ">
            <div className="header-container">
                <Link to='/' className="main-logo">  <h4 > CRUD </h4></Link>

                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <Link to='/post-page' className="nav-link active"> Posts </Link>

                    </li>

                    <li className="nav-item">

                        <Link to="/about" className="nav-link">About</Link>

                    </li>


                </ul>
            </div>

        </header>
    }
}

export default Header