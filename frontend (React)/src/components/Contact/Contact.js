import './Contact.css';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2'
import { BiSend } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

function Contact() {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "2de713a9-b691-47d8-a179-d952a2d0172e");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
            });
        }
    };

    return (
        <div className='container'>
            <h1>Contact Me</h1>
            <div className='contact'>
                <div className='contact-form'>
                    <form onSubmit={onSubmit}>
                        <h2>Contact Form</h2>
                        <div className='input-box'>
                            <label>Full Name</label>
                            <input type='text' className='field' placeholder='Enter you name' name='name' required />
                        </div>
                        <div className='input-box'>
                            <label>Email Address</label>
                            <input type='email' className='field' placeholder='Enter you email' name='email' required />
                        </div>
                        <div className='input-box'>
                            <label>Your Message</label>
                            <textarea className='field mess' placeholder='Enter you message' name='message' required></textarea>
                        </div>
                        <Button variant="dark" type='submit'>Send Message <BiSend /></Button>
                    </form>
                </div>

                <div className='contact-info'>
                    <div className='box'>
                        <MdOutlineEmail />
                        <h3>Email</h3>
                        <p>kornkamol.saengsawang@gmail.com</p>
                    </div>
                    <div className='box'>
                        <a href="https://github.com/Berubell9" target="_blank">
                            <FaGithub />
                            <h3>Github</h3>
                            <p>https://github.com/Berubell9</p>
                        </a>
                    </div>
                    <div className='box'>
                        <FaPhoneAlt />
                        <h3>Phone</h3>
                        <p>(+66) 62-586-7014</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contact;