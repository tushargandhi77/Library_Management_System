import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import './Navbar.css';
import Logo from '../assets/navbar/logo.png';
import search_icon_light from '../assets/navbar/search-w.png';

export default function Navbar() {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showRegisterModal, setShowRegisterModal] = useState(false);

    const handleCloseLoginModal = () => setShowLoginModal(false);
    const handleShowLoginModal = () => setShowLoginModal(true);

    const handleCloseRegisterModal = () => setShowRegisterModal(false);
    const handleShowRegisterModal = () => setShowRegisterModal(true);

    const toggleRegisterModal = () => {
        setShowLoginModal(false);
        setShowRegisterModal(true);
    };

    const toggleLoginModal = () => {
        setShowRegisterModal(false);
        setShowLoginModal(true);
    };

    const handleLoginAfterRegistration = () => {
        setShowRegisterModal(false);
        handleShowLoginModal();
    };
    const handlelogout = () => {
        localStorage.removeItem('authToken');
        window.location.reload('/');
    }

    return (
        <>
            {/* navbar start */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className='navbar'>
                <Link className="nav-link" to="/"><img src={Logo} alt="" className='logo'/></Link>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-2">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link" to="/bookproduct">Books</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link" to="/contactus">Contact us</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link" to="/feedback">Feedback</Link>
                            </li>
                            {(localStorage.getItem("authToken")) ?
                                <li className="nav-item dropdown mx-2">
                                    <Link className="nav-link dropdown-toggle active" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                                        <li><Link className="dropdown-item" to="/books">Store</Link></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><Link className="dropdown-item" to="/order">Order Details</Link></li>
                                    </ul>
                                </li>
                                : ""}
                    </ul>
                    <div className='search-box'>
                        <input type='text' placeholder='search'/>
                        <img src={search_icon_light} alt=""/>
                    </div>
                    {(!localStorage.getItem("authToken")) ?
                        <div className="d-flex">
                            <ul>
                                <li className="btnhover" type="button" onClick={handleShowLoginModal}>
                                    Sign in<span></span><span></span><span></span><span></span>
                                </li>
                                <li className="btnhover" type="button" onClick={handleShowRegisterModal}>
                                    Sign up<span></span><span></span><span></span><span></span>
                                </li>
                            </ul>
                        </div>
                        :
                        <div className='d-flex '>
                            <ul>
                                <li className="btnhover" type="button" onClick={handlelogout}>
                                    Logout<span></span><span></span><span></span><span></span>
                                </li>
                                <Link to='/cart'>
                                <li className="btnhover" type="button">
                                    My Cart<span></span><span></span><span></span><span></span>
                                </li>
                                </Link>
                            </ul>
                        </div>
                    }
                </div>
                {/* navbar end */}

                {/* Login Modal */}
                <Modal show={showLoginModal} onHide={handleCloseLoginModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <LoginForm handleCloseLoginModal={handleCloseLoginModal} />
                        <p className="text-center mt-3">Not registered? <button className="btn btn-link" onClick={toggleRegisterModal}>Register here</button></p>
                    </Modal.Body>
                </Modal>

                {/* Register Modal */}
                <Modal show={showRegisterModal} onHide={handleCloseRegisterModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Register</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <RegisterForm onSuccess={handleLoginAfterRegistration} />
                        <p className="text-center mt-3">Already a user? <button className="btn btn-link" onClick={toggleLoginModal}>Login here</button></p>
                    </Modal.Body>
                </Modal>
            </nav>
            <div id="scroll-container">
                <div id="scroll-text">  
                        <h2 className='text-text-text'>This Summer Avail  Many Offers Here 50% Off in Books Renting and Study Online Free</h2>
                </div>
            </div>
        </>
    );
}
