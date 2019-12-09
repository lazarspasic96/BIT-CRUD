import React from 'react';
import { Link } from 'react-router-dom'
import AboutPage from "../AboutPage";
import './header.css'


class Header extends React.Component {

    render() {
        return <header class="page-header ">
            <div className = "header-container">
                <h4 className="main-logo"> CRUD </h4>
            <ul className="nav justify-content-end">
             <li className="nav-item">
               <a className="nav-link active" href="#">Posts</a>
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