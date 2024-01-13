import React, {useRef} from "react";
import aboutimage from './images/about.png'
import emailjs from '@emailjs/browser';

function Contact(){
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_lcfuj48', 'template_8qe54d7', form.current, 'd4w5FNO17DiTKKzEX')
        .then((result) => {
            console.log(result.text);
            console.log("email sent");
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <div id='contact'>
            <h1>CONTACT US</h1>
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" placeholder="Name : "/>
                <label>Email</label>
                <input type="email" name="user_email" placeholder="Email : " />
                <label>Message</label>
                <textarea name="message" placeholder="Write Message : " />
                <input type="submit" value="Send"  />
            </form>
        </div>
    )
}

export default Contact;