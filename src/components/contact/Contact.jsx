import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsPhone } from 'react-icons/bs'
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';


function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_97wzqfb', 'template_19lifd7', form.current, 'Xikdf6pbQVsHdvyWs')
            .then((result) => {
                console.log(result.text);

            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    };
    return (
        <section id='contact'>
            <h5>Get in touch </h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options" target='_blank'>

                    <article className="contact__option">
                        <a href="mailto:el.jafari.el@gmail.com">
                            <MdOutlineEmail />
                            <h4>Email</h4>
                            <h5>el.jafari.el@gmail.com</h5>
                            &#10004; Send a Message
                        </a>
                    </article>
                    <article className="contact__option">
                        <a href="tel:+16043391170" target='_blank' >
                            <BsPhone />
                            <h4>Call</h4>
                            <h5>+1(604)339-1170</h5>
                            &#10004; Send a Message
                        </a>
                    </article>
                </div>
                <form className='contact__form' ref={form} onSubmit={sendEmail}>
                    <input name='fullName' className='contact__form-input' type="text" placeholder='Your Full Name' required />
                    <input name='email' className='contact__form-input' type="text" placeholder='Your Email' required />
                    <textarea className='contact__form-input' name="message" id="" rows="10" placeholder='Your Message'></textarea>
                    <button className='btn btn-primary' type='submit'>Send Message</button>


                </form>

            </div>
        </section>
    )
}

export default Contact
