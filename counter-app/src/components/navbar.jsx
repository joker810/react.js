import React, { Component } from 'react';


const Navbar = ({totalCounters}) => {
    return ( 
        <nav class="navbar bg-body-tertiary">
                <div className="container-fluid">
                <a           className="navbar-brand"          href="#">Navbar <span className="badge badge-pill badge-secondary">{totalCounters}</span></a>
                </div>
                </nav>
     );
}
 
export default Navbar;