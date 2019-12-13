import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './header.css'

import AboutPage from "../AboutPage/AboutPage";

import PostPage from '../Post/PostPage';




class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            login: false
        }


    }


    render() {



        if (localStorage.getItem('jwtToken')) {
            return <header className="page-header ">
                <div className="header-container">
                    <Link to='/' className="main-logo">  <h4 > CRUD </h4></Link>

                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <Link to='/dashboard' className="nav-link active"> Dashboard </Link>
                        </li>
                        <li className="nav-item">

                            <Link to="/dashboard/my-posts" className="nav-link">My Posts</Link>
                        </li>
                    </ul>
                </div>

            </header>
        }

        else {

            return <header className="page-header ">
                <div className="header-container">
                    <Link to='/' className="main-logo">  <h4 > CRUD </h4></Link>

                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <Link to='/' className="nav-link active"> Posts </Link>
                        </li>
                        <li className="nav-item">

                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                    </ul>
                </div>

            </header>
        }
    }




}

export default withRouter(Header)