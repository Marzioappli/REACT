import React from 'react';
import { useNavigate } from "react-router-dom";
import '../index.css';
function sendEmail() {
    window.location.href = "mailto:marziocassese@gmail.com?subject=Frage&body=Danke für die Message";
}

const ContactPage = () => {
return (
    <div className="contact-page">
    <h1 className="title">Contact ME</h1>
    <form>
        <div className="zeilen">
        <label>Name:</label>
        <input className="sendebox" type="text" name="name" />
        </div>
        <div className="zeilen">
        <label>Email:</label>
        <input className="sendebox" type="email" name="email" />
        </div>
        <div className="zeilen">
        <label>Message:</label>
        <textarea className="sendebox" name="message" />
        </div>
        <button className="button-sending " type="submit"onClick={sendEmail}>
            Submit</button>
    </form>
    </div>
);
};

export default ContactPage;