import { useRef } from "react";
import emailjs from "emailjs-com";

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

      <div className="social-icons">{/* your icons here */}</div>

      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}
