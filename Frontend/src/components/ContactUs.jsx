import React from 'react';

export default function ContactUs() {
    const inputStyle = { width: '48%' };
    const labelStyle = { marginLeft: '-317px'};
    const buttonStyle = { marginLeft: 'auto', marginRight: 'auto', display: 'block' };
    

    return (
        <div className="d-flex flex-column align-items-center bg-black-black mt-5 rounded-1">
            <h1 className="text-white mt-4 mb-4">Send Us Your Query</h1>
            <p className="text-white" style={labelStyle}>Name</p>
            <input type="text" className="bg-light rounded-2 mb-2" style={inputStyle} />
            <p className="text-white" style={labelStyle}>Mobile</p>
            <input type="text" className="bg-light rounded-2 mb-2" style={inputStyle} />
            <p className="text-white" style={labelStyle}>Email</p>
            <input type="text" className="bg-light rounded-2 mb-2" style={inputStyle} />
            <p className="text-white" style={{ marginLeft: '-272px' }}>Department</p>
            <input type="text" className="bg-light rounded-2 mb-2" style={inputStyle} />
            <p className="text-white" style={{ marginLeft: '-290px' }}>Message</p>
            <textarea name="Message" id="" cols="30" rows="2" className="bg-light rounded-2 mb-2" style={inputStyle}></textarea>
            <button className="mt-2 p-2 rounded-2 text-white bg-primary mb-4" style={buttonStyle}>Send Message</button>
        </div>
    );
}
