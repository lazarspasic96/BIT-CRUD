import React from 'react';

import './header.css';



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
               <a className="nav-link" href="#">About</a>
               </li>
     
            </ul>
            </div>

        </header>
    }
}

export default Header