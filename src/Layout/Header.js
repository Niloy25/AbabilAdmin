import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../images/logo.png"

export default function Header() {
    return (
        <>
            <header className='dashboard-header'>
                <div className='container-fluid'>
                    <nav className="navbar navbar-expand-lg navbar-light customNavbar">
                        <a className="navbar-brand" href="#">
                            <img src={logo} />
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav m-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to='/dashboard'>
                                        Dashboard <span className="sr-only">(current)</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/inventory'>
                                        Inventory
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " to="/order">Orders</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/payments' className="nav-link">Payments</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/offers' className="nav-link">Offers</Link>
                                </li>
                            </ul>
                            <div className='rgt-cnt-btn'><Link to="/notification"><i className="fa-regular fa-bell"></i></Link>
                                <Link to='/profile'><i className="fa-regular fa-user"></i></Link></div>
                        </div>


                    </nav>
                    <div className='rgt-cnt-btn FormobileRgtCnt'>
                        <a href="#"><i className="fa-regular fa-bell"></i></a>
                        <a href="#"><i className="fa-regular fa-user"></i></a>
                    </div>
                </div>
            </header>
        </>
    )
}