import { useRef } from "react";
import emailjs from "@emailjs/browser";
//import { serviceId, templateId, publicKey } from "../../";

export const Contact = () => {
  const serviceId = import.meta.env.VITE_MY_PORTFOLIO_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_MY_PORTFOLIO_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_MY_PORTFOLIO_EMAILJS_PUBLIC_KEY;

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, e.target, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      <section className="contact">
        <h3>Get in touch</h3>
        <div className="contact_content">
          <p>I would love to hear from you.</p>
          <form
            ref={form}
            className="contact_content_form"
            onSubmit={sendEmail}
          >
            <input
              type="text"
              placeholder="Full Name"
              name="user_name"
              required
            />
            <input
              type="eamil"
              placeholder="Email"
              name="user_email"
              required
            />
            <input type="text" placeholder="Subject" name="subject" required />
            <textarea name="message" />
            <button type="submit">Send message</button>
          </form>
        </div>
        <div className="contact_socialMedia">
          <div></div>
        </div>
      </section>
    </>
  );
};
