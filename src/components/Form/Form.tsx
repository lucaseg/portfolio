import { Container, ContainerSucces } from "./styles";
import { useForm, ValidationError } from "@formspree/react";
import { toast, ToastContainer } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";
import { useEffect, useState } from "react";
import validator from "validator";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Form = () => {
  const [validEmail, setValidEmail] = useState(false);
  const [message, setMessage] = useState("");
  const [state, _] = useForm("xknkpqry");
  const [isHuman, setIsHuman] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
  });

  function verifyEmail(email: string) {
    setFormData({user_email: email});
    if (validator.isEmail(email)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        "service_v14lpcr",
        "template_uo8d0lq",
        e.target,
        "u4lTlkYdRGTKg9Hee"
      )
      .then(
        (result) => {
          setIsLoading(false);
          setShowPopup(true);
          setFormData({ user_name: "", user_email: ""});
          setTimeout(() => setShowPopup(false), 3000); // Ocultar popup después de 3 segundos
        },
        (error) => {
          setIsLoading(false);
          alert("Ocurrió un error, por favor intenta nuevamente.");
        }
      );
  };

  return (
    <Container>
      <h2>Get in touch using the form</h2>
      <form onSubmit={handleSubmit}>
        <div className = "row">
          <input
          className="children"
            type="text"
            name="user_name"
            placeholder="Name"
            value={formData.user_name}
            onChange={handleChange}
            required
          />
        </div>
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <div className = "row">

          
          <div className="children">
          <input
          
            placeholder="Email"
            id="email"
            type="email"
            name="user_email"
            value={formData.user_email}
            onChange={(e) => {
              verifyEmail(e.target.value);
            }}
            required
          />
          </div>
     
        </div>
        <div className = "row">
          <textarea
            name="message"
            id="message"
            placeholder="Send a message to get started."
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={state.submitting || !validEmail || !message
          }>
         {isLoading ? <div className="spinner"></div> : "Submit"} 
        </button>
      </form>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>Message sent</p>
          </div>
        </div>
      )}
      <ToastContainer />
    </Container>
  );
};
