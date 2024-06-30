import { Container, ContainerSucces } from "./styles";
import { useForm, ValidationError } from "@formspree/react";
import { toast, ToastContainer } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";
import { useEffect, useState } from "react";
import validator from "validator";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Form = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v14lpcr",
        "template_uo8d0lq",
        e.target,
        "u4lTlkYdRGTKg9Hee"
      )
      .then(
        (result) => {
          alert("Mensaje enviado!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("Ocurrió un error, por favor intenta nuevamente.");
        }
      );
  };

  return (
    <div className="App">
      <h1>Formulario de Contacto</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="user_name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="user_email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Mensaje:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
