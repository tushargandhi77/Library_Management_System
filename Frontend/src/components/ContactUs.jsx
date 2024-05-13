import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

  export default function ContactUs(){
    const inputStyle = { width: '48%' };
    const labelStyle = { marginLeft: '-317px'};
    const buttonStyle = { marginLeft: 'auto', marginRight: 'auto', display: 'block' };
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
          .sendForm('service_7a13p3l', 'template_gj3iire', form.current, {
            publicKey: '-aGAOJFZqr4SUu-tV',
            })
        .then(
            () => {
            toast.success('Your message has been sent successfully!');
            console.log('SUCCESS!');
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
    };

    return (
        <form ref={form} onSubmit={sendEmail} className="d-flex flex-column align-items-center bg-black-black mt-5 rounded-1">
                 <h1 className="text-white mt-4 mb-4">Send Us Your Query</h1>
                 <p className="text-white" style={labelStyle} aria-required>Name</p>
                 <input type="text" name="from_name" rows="2" className="bg-light rounded-2 mb-2" style={inputStyle} />
                 <p className="text-white" style={labelStyle} aria-required>Mobile</p>
                 <input type="text" rows="2" className="bg-light rounded-2 mb-2" style={inputStyle} />
                 <p className="text-white" style={labelStyle} aria-required>Email</p>
                 <input type="text" rows="2" name="from_email" className="bg-light rounded-2 mb-2" style={inputStyle} />
                 <p className="text-white" style={{ marginLeft: '-290px' }} aria-required>Message</p>
                 <textarea name="message" id="" cols="30" rows="4" className="bg-light rounded-2 mb-2" style={inputStyle}></textarea>
                 <button className="mt-2 p-2 rounded-2 text-white bg-primary mb-4" style={buttonStyle} type="submit" value="Send">Send Message</button>
        </form>
  );
};