import React, { useState } from "react";
import emailjs from "emailjs-com";
import DotBackground from './DotBackground.js';
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });


//CODE BELOW IS FROM EMAIL.JS DOCUMENTATION: https://www.emailjs.com/docs/examples/reactjs/
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
//we really should not put our key in here - it is not secure. Ideally this would be secure in the back end and not client-facing
    emailjs
      .send(
        "service_w6ft0pg", //service id (gmail)
        "template_bzbtxzp", //email template id
        formData,
        "PVgtUNy9q-i8yPFHw" //publick key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("SUCCESS");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus("ERROR");
        }
      );
  };

  return (
    <div className="contact-form">
    <DotBackground />

      <h1>Contact Me</h1>
      {status === "SUCCESS" && <p>Thank you for your interest! I will get back to you soon.</p>}
      {status === "ERROR" && <p>Something went wrong. Please try again.</p>}
      <form onSubmit={handleSubmit}>
          <input placeholder="Name" type="text" name="name" value={formData.name} onChange={handleChange} required/>
          <input placeholder="Email" type="email" name="email" value={formData.email} onChange={handleChange} required/>
          <textarea placeholder="Message" name="message" value={formData.message} onChange={handleChange} required />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
