import { useRef } from "react";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_r8uob7q",
        "template_4yblals",
        form.current,
        "QZUA_ffkAbl4ZdO9y"
      )
      .then(
        (result) => {
          alert("Message sent!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send. Try again.");
        }
      );
  };

  return (
    <section className="contact">
      <h2 className="header">Contact Me</h2>

      <div className="social-icons">
        <a
          href="https://github.com/renierjardio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/renier-james-jardio-166821222"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://instagram.com/renrjames"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>

      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}
