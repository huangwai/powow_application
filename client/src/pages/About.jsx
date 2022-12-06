import React from 'react';
import logo from '../images/powowlogo.png';
import ContactForm from '../components/ContactForm';
import Typography from '@mui/material/Typography';
function About() {
  return (
    <div id="aboutPage">
      <center>
        <Typography sx ={{color: "#FFFFFF",fontWeight: 'bold'}} align = "left" variant="h2">About POWOW</Typography>
        <Typography sx ={{color: "#FFFFFF"}} align = "left" variant="h4">Online Chat Service</Typography>
        <Typography sx ={{color: "#FFFFFF"}} align = "left" variant="h6">POWOW introduces users to an all new experience for chatting across the web. Combining popular features like
          Zoom's room creation to Omegles randomized public chatting feature, we bring it all together for immerse
          conversations. POWOW allows you to either join an prexisting room via a room code. Create your own unique chat
          room in a simple input. And join the public chat room whenever your feeling bored.</Typography>
        
      </center>
      {/* <ContactForm/> */}
    </div>
  );
}
export default About;
