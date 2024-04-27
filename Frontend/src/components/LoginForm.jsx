import React, { useState } from 'react';

export default function LoginForm({ handleCloseLoginModal }) {
    const [credentials, setCredentials] = useState({ email: '', password: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:3000/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: credentials.email,
                password: credentials.password
            })
        })
        const json = await response.json();

        if (!json.success) {
            alert("Enter valid credentials");
        } else {
            alert("Login successful");
            localStorage.setItem("userEmail", credentials.email);
            localStorage.setItem("authToken", json.authToken);
            handleCloseLoginModal();
        }
    };

    const handleChange = (event) => {
        setCredentials({ ...credentials, [event.target.id]: event.target.value });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" value={credentials.email} onChange={handleChange} required />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" value={credentials.password} onChange={handleChange} required />
            </div>
            <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-outline-success w-100">Login</button>
            </div>
        </form>
    );
}
