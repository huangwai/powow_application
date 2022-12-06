import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { ChatRoom } from '../components/ChatRoom';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import '../css/pages/Home.css';

/*
Join Room page component
 */
const Home = props => {
  let currentDate = new Date();
  let userName = 'user' + currentDate.getHours() + currentDate.getMinutes() + currentDate.getSeconds();

  Home.propTypes = {
    socket: PropTypes.object
  };
  return (
    <div className="Home">
      <Stack direction="row" spacing={15} justifyContent="flex-start" alignItems="center">
      <Card sx={{ bgcolor: '#0466C8', minWidth: 100, maxWidth:800, minHeight: 100, maxHeight: 500 }} color="success">
        <Box display="flex" justifyContent="center" alignItems="center" sx={{ m: 10 }}>
          <CardContent >
          <Typography sx={{ fontWeight: 'bold' }} justifyContent="flex-start" variant="h4" color = "white" gutterBottom>
          Chat with POWOW
            </Typography>
            <Typography variant="body2" justifyContent="flex-start" color = "white" gutterBottom >
            Reconnect or Explore new conversations with friends accross the web
            </Typography>
          </CardContent>
        </Box>
        <Box display="flex" justifyContent="flex-start" alignItems="center" sx={{ mb: 10 }}>
          <CardActions>
            <Button sx = {{backgroundColor: "white",fontWeight: 'bold'}} size="large" variant="outlined" href="/chatOptions">
            Start exploring
            </Button>
          </CardActions>
        </Box>
      </Card>
      <box className="loader">
                    |<span>o</span><span>_</span><span>o</span>|<span>^</span><span>_</span><span>^</span>|<span>+</span><span>_</span><span>+</span>|
      </box>
      </Stack>


      {/* <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 10 }}>
        <Card sx={{ minWidth: 300, maxWidth: 500 }}>
          <CardContent>
            <h3>Connect across the world starting with POWOW </h3>
            <br></br>
            <p>Reconnect or Explore new conversations with friends accross the web.</p>
          </CardContent>
          <CardActions>
            <Button href="/chatOptions" size="small">
              Start exploring
            </Button>
          </CardActions>
        </Card> */}
        {/* <Card sx={{ minWidth: 300, maxWidth: 300 }}>
          <CardContent>
            <p>Start connecting</p>
          </CardContent>
          <CardActions>
            <Button size="small">Join random lobby</Button>
          </CardActions>
        </Card> */}
        {/* <div id="globalChat">
          <ChatRoom socket={props.socket} userName={userName} roomId={'-1'} />
        </div> */}
      {/* </Box> */}
      {/* <ContactForm/> */}
    </div>
  );
};
export default Home;
