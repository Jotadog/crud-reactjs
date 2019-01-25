import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div>
            <Link className='navbar-brand' to='/'><i className='fas fa-angle-right'></i>&nbsp;CRUD</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/register"><i className='fas fa-user-plus'></i><span className="sr-only">(current)</span></Link>
                </li>
            </ul>
        </div>
    </nav>
);


export default Header;