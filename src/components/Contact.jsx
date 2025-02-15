import React, { useState } from "react";
import { Button } from "@material-ui/core";
import emailjs from "emailjs-com";

function Contact() {
  const [isMessageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_1wf00hr", "template_i0aoywc", e.target, "pZ6gw-6XbcroX3d5a")
      .then(
        (result) => {
          console.log(result.text);
          setMessageSent(true);
          // Reset the form after successful submission
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleCloseAlert = () => {
    setMessageSent(false);
  };

  return (
    <div className="items_wrapper">
      <h1>Contact</h1>
      {isMessageSent && (
        <div className="success-alert">
          <p>Message sent successfully!</p>
          <Button onClick={handleCloseAlert} variant="outlined" size="small">
            Close
          </Button>
        </div>
      )}
      <form onSubmit={sendEmail}>
        <label htmlFor="fullname">Full Name</label>
        <input type="text" id="fullname" name="fullname" placeholder="Your name" />

        <label htmlFor="contact">Email/Phone Number</label>
        <input type="text" id="contact" name="contact" placeholder="Your contact information" />

        <label htmlFor="subject">Inquiry</label>
        <textarea id="subject" name="subject" placeholder="Write something"></textarea>

        <Button type="submit" variant="contained" size="large">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Contact;
