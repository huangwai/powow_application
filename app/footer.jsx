import React from 'react';
import { Box, Container, Row, Column, FooterLink } from '../styles/FooterStyles';

const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: 'White', textAlign: 'center', marginTop: '-50px' }}>POWOW</h1>
      <Container>
        <Row>
          <Column>
            <FooterLink href="/">Home</FooterLink>
          </Column>
          <Column>
            {/* <Heading>Chat</Heading> */}
            <FooterLink href="/about">About</FooterLink>
            {/* <FooterLink href="createRoom">Create Room</FooterLink>
            <FooterLink href="publicChat">Start Chatting</FooterLink> */}
          </Column>
          <Column>
            {/* <Heading>Contact Us</Heading> */}
            <FooterLink href="/chatOptions">Chat</FooterLink>
          </Column>
          <Column>
            {/* <Heading>Social Media</Heading> */}
            <FooterLink href="/chatOptions">Chat</FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
