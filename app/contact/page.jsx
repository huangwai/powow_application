'use client';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

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
    // <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '100px', color: '#FFFFFF' }}>
    <Box
    gap = {2.5}
        sx={{
          mx:'auto',
          my: 'auto',
          // mt: '25%',
          // mb: '1',
          backgroundColor: "#10131F",
          display: "grid",
          overflowY: 'scroll',
          '&::-webkit-scrollbar': {display: 'none'},
          gridTemplateColumns: {
            mobile: "repeat(1, 1fr)",
            bigMobile: "repeat(1, 1fr)",
            tablet: "repeat(1, 1fr)",
            desktop: "repeat(2, 1fr)"
          },
          width: '85%',
           height: '95%'
          
        }}
    >
      <StyledContactForm>
      <Typography
            align="center"
            // textAlign={'center'}
            variant="subject1"
            // noWrap
            component="a"
            // href="/"
            sx={{
              pt:'10%',
              pl: '25%',
              display: { xs: 'flex', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              fontSize: '30px',
              textDecoration: 'none',
              textAlign: 'center',
              m: 'auto',
              // pl:'2%',
            }}
          >
            Contact Me
          </Typography>

        <br></br>
        <form ref={form} onSubmit={sendEmail}>
          {/* <label>Name *</label> */}
          <input autocomplete="name" type="text" placeholder='Enter your full name' name="user_name" />
          {/* <label>Email Address *</label> */}
          <input autocomplete="email" type="email"placeholder='Enter your email address' name="user_email" />
          {/* <label>Message *</label> */}
          <textarea placeholder='Enter your message' name="message" />
          <input type="submit" value="Send" />
        </form>
      </StyledContactForm>
    {/* // </div> */}
    </Box>
  );
};

export default ContactForm;
// Styles
const StyledContactForm = styled.div`
  width: auto;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 90%;
    margin-left: 3%;
    font-size: 16px;
    fontFamily: 'monospace';
    // color: #ffffff;
    input {
      margin: auto;
      margin-top: 1rem;
      background-color: inherit;
      width: 50%;
      height: 40px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      color:white;
      caret-color: white;
      fontFamily: 'monospace';
      // border: 1px solid #0440cb;
      &:focus {
        border: 2px solid grey;
      }
    }
    textarea {background-color: inherit;
      margin: auto;
      margin-top: 2rem;
      max-width: 50%;
      min-width: 10%;
      width: 90%;
      max-height: 100px;
      min-height: 200px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      color:white;
      fontFamily: 'monospace';
      // border: 1px solid #0440cb;
      &:focus {
        border: 2px solid grey;
      }
    }
    input[type='submit'] {
      margin-top: 2rem;
      cursor: pointer;
      height: 40px;
      font-size: 18px;
      background-color: rgb(148 163 184);
      fontFamily: 'monospace';
      color: #ffffff;
      border: none;
      padding: 1%;
      padding-bottom: 3%;
      padding-left: 1%;
      padding-right: 1%;
      caret-color: red;
      &:hover {
        background-color: #10131F;
        border: 2px solid grey;
        transition: background-color 1s;
      }
    }
  }
`;