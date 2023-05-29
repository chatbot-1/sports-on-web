import React from "react";
import "./contact.css";
import women from "../../assets/women.png"

const Contact = () => {
  return (
    <>
      <div className="contact" id="contact">
        <div className="contact-container container">
          <div class="contactform">
            <form>
              <h2>Get In Touch</h2>
              <div class="inputbox">
                <input type="text" name="" required="required" />
                <span>Name</span>
              </div>
              <div class="inputbox">
                <input type="text" name="" required="required" />
                <span>E-mail</span>
              </div>
              <div class="inputbox">
                <textarea required="required"></textarea>
                <span>Message</span>
              </div>
              <div class="inputbox">
                <input type="submit" value="Send" />
              </div>
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
