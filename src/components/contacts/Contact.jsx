import React, { useRef } from "react";
import "./contact.css";
import women from "../../assets/women.png"
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uqraw5u",
        "template_z9z8mrg",
        form.current,
        "BYb8XlWQPY10QbrgB"
      )
      e.target.reset()
  };

  const confirm = () => {
    toast.success("Message sent successfully!", {
      position: "top-center",
      theme: "colored"
    });
  }
  
  return (
    <>
      <div className="contact" id="contact">
        <div className="contact-container container">
          <div class="contactform">
            <form name="" ref={form} onSubmit={sendEmail}>
              <h2>Get In Touch</h2>
              <div class="inputbox">
                <input type="text" name="name" required="required" />
                <span>Name</span>
              </div>
              <div class="inputbox">
                <input type="text" name="email" required="required" />
                <span>E-mail</span>
              </div>
              <div class="inputbox">
                <textarea required="required" name="message"></textarea>
                <span>Message</span>
              </div>
              <div class="inputbox">
                <input type="submit" value="Send" />
              </div>
              <ToastContainer />
            </form>
          </div>
          <div className="contact-women">
            <img src={women} alt="" />
          </div>
        </div>
      </div>
      <hr size="1" width="100%" color="white"></hr>
    </>
  );
};

export default Contact;
