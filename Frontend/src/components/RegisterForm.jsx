import React, { useState } from 'react';
import { toast } from 'react-toastify';

export default function RegisterForm({onSuccess}) {

    const [credentials,setcredentials] = useState({name:"",email:"",password:"",role:""})


    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:3000/users/createuser',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                name:credentials.name,
                email:credentials.email,
                password:credentials.password,
                role:credentials.role
            })
        })
        const json = await response.json()
        console.log(json.message);
        if(json.message!=="success") {
            toast.error("Registration failed with error: " + json.error);
            
        } else {
            toast.success("Registration successful");
            // localStorage.setItem("userEmail", credentials.email);
            // localStorage.setItem("authToken", json.authToken);
            onSuccess()
        }
    }
    const onchange = (event) =>{
        setcredentials({...credentials,[event.target.id]:event.target.value})
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" value={credentials.name} onChange={onchange} required />
            </div>  
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" value={credentials.email} onChange={onchange} required />
            </div>  
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" value={credentials.password} onChange={onchange} required />
            </div>
            <div className="mb-3">
                <label htmlFor="role" className="form-label">Role</label>
                <input type="text" className="form-control" id="role" value={credentials.role} onChange={onchange} required />
            </div>
            <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-outline-primary w-100">Register</button>
            </div>
        </form>
    );
}
