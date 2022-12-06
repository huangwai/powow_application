import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "../css/components/FooterStyles";

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "White",
				textAlign: "center",
}}>
		POWOW
	</h1>
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="/">Home</FooterLink>
			<FooterLink href="about">Vision</FooterLink>
		</Column>
		<Column>
			<Heading>Chat</Heading>
			<FooterLink href="joinRoom">Join Room</FooterLink>
			<FooterLink href="createRoom">Create Room</FooterLink>
			<FooterLink href="publicChat">Start Chatting</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="contact">Contact</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
