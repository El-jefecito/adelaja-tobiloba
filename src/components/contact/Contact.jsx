import { MdOutlineEmail } from "react-icons/md";
import "./contact.css";

import { BsLinkedin } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";

// import emailjs from "emailjs-com";

const Contact = () => {
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm("service_8vojj7m", "template_6ixh92u", form.current, {
  //     publicKey: "1Nw3ZGfBulwgNO0K4",
  //   });
  // };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>thobiloba33@gmail.com</h5>
            <a href="mailto:thobiloba33@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <BsLinkedin className="contact__option-icon" />
            <h4>Linkedin</h4>
            <h5>Adelaja Tobiloba</h5>
            <a href="https://www.linkedin.com/in/adelaja-oluwatobi-a3715425b/">
              Let&apos;s Connect
            </a>
          </article>
          <article className="contact__option">
            <FaTwitter className="contact__option-icon" />
            <h4>Twitter</h4>
            <h5>@TobbyAdelaja</h5>
            <a href="https://twitter.com/TobbyAdelaja">Let&apos;s Connect</a>
          </article>
        </div>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
