import React from 'react';
import logo from '../images/powowlogo.png';
import ContactForm from '../components/ContactForm';
//import HomeButton from '../components/HomeButton.jsx';
function About() {
  return (
    <div id="aboutPage">
      <center>
        <h1>About POWOW</h1>
        <h4>Online Chat Service</h4>
        <p>
          POWOW introduces users to an all new experience for chatting across the web. Combining popular features like
          Zoom's room creation to Omegles randomized public chatting feature, we bring it all together for immerse
          conversations. POWOW allows you to either join an prexisting room via a room code. Create your own unique chat
          room in a simple input. And join the public chat room whenever your feeling bored.
        </p>
      </center>
      {/* <ContactForm/> */}
    </div>
  );
}
export default About;
