import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
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
                <div className="container p-2">
                    <Link className="navbar-brand italic-text animate-charcter-1" to="/">LibraLogic</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-start" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-2">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            {(localStorage.getItem("authToken")) ?
                                <li className="nav-item dropdown mx-2">
                                    <Link className="nav-link dropdown-toggle active" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" to="#">Profile</Link></li>
                                        <li><Link className="dropdown-item" to="/books">Store</Link></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><Link className="dropdown-item" to="/order">Order Details</Link></li>
                                    </ul>
                                </li>
                                : ""}
                        </ul>
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            className=" mr-sm-4 form-control-control"
                        />
                        {(!localStorage.getItem("authToken")) ?
                            <div className="d-flex">

                                <div className="btn-btn-div">
                                    <button className="custom-btn btn-3 mx-2" type="button" onClick={handleShowLoginModal}><span>Login</span></button>
                                </div>
                                <div className="btn-btn-div">
                                    <button className="custom-btn btn-3" type="button" onClick={handleShowRegisterModal}><span>Register</span></button>
                                </div>
                            </div>
                            :
                            <div className='d-flex '>
                                <div className="btn-btn-div">
                                    <button className="custom-btn btn-5 mx-2" type="button" onClick={handlelogout}><span>Logout</span></button>
                                </div>
                                <div className="btn-btn-div">
                                    <Link to='/cart'><button className="custom-btn btn-12 " type="button"><span>Click!</span><span>My Cart</span></button></Link>
                                </div>
                            </div>
                        }
                    </div>

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
