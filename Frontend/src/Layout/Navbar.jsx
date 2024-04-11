import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

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
        window.location.reload();
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container p-3">
                <Link className="navbar-brand" to="/main">LibraLogic</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-start" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-2">
                            <Link className="nav-link active" aria-current="page" to="/main">Home</Link>
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

                    {(!localStorage.getItem("authToken"))?
                    <div className="d-flex">
                        
                        <div className="btn-btn-div">
                            <button className="btnhove" type="button" onClick={handleShowLoginModal}>Login</button>
                        </div>
                        <div className="btn-btn-div">
                            <button className="btnhove" type="button" onClick={handleShowRegisterModal}>Register</button>
                        </div>
                    </div>
                    :
                    <div className='d-flex '>
                    <div className="btn-btn-div">
                            <button className="btnhove" type="button" onClick={handlelogout}>Logout</button>
                    </div>
                    <div className="btn-btn-div">
                            <Link to='/order'><button className="btnhove" type="button">Orders</button></Link>
                    </div>
                    </div>
                    }
                </div>
                
            </div>

            <Modal show={showLoginModal} onHide={handleCloseLoginModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <LoginForm handleCloseLoginModal={handleCloseLoginModal} />
                    <p className="text-center mt-3">Not registered? <button className="btn btn-link" onClick={toggleRegisterModal}>Register here</button></p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseLoginModal}>
                        Close
                    </Button>
                </Modal.Footer>
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
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseRegisterModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </nav>
    );
}
