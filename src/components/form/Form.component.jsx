import "./Form.styles.scss";
import { useState } from 'react';
import { toast } from 'react-toastify'
import { ToastContainer } from "react-toastify";

const Form = () =>{
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) =>{
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, subject, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            subject: subject.value,
            message: message.value
        };
        let response = await fetch("https://vireak-san.herokuapp.com/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        toast(result.status)
    }
    return(
        <>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Your Name</label>
                    <input type ="text" id="name" required/>
                    <label htmlFor="email">Email</label>
                    <input type ="email" id="email" required/>
                    <label htmlFor="subject">Subject</label>
                    <input type ="text" id="subject" required/>
                    <label htmlFor="message">Message</label>
                    <textarea rows="6" placeholder="Type Your Message Here" id="message" required/>
                    <button className="btn">{status}</button>
                </form>
            </div>
            <ToastContainer toastStyle={{backgroundColor:"#0072b1", color:"white"}}/>
        </>
    )
}

export default Form;