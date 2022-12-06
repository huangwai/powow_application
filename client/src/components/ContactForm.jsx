import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs.sendForm('service_15qvc26', 'template_h8azk7t', form.current, 'iuzNDtNBVCkuhUrfg').then(
      result => {
        console.log(result.text);
        alert('Message Sent!!!');
        console.log('Message Sent');
      },
      error => {
        console.log(error.text);
      }
    );
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '100px', color: "#FFFFFF"}}>
      <StyledContactForm>
        <h1>Contact Us</h1>
        <br></br>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </StyledContactForm>
    </div>
  );
};

export default ContactForm;
// Styles
const StyledContactForm = styled.div`
  width: 600px;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    color: #FFFFFF;
    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid #0440CB;
      &:focus {
        border: 2px solid #0440CB;
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid #0440CB;
      &:focus {
        border: 2px solid #0440CB;
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type='submit'] {
      margin-top: 2rem;
      cursor: pointer;
      background: #0440CB;
      color: #FFFFFF;
      border: none;
    }
  }
`;
