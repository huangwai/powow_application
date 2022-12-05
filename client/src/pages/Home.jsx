import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { ChatRoom } from '../components/ChatRoom';
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
      <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 10 }}>
        <Card sx={{ minWidth: 300, maxWidth: 500}}>
          <CardContent>
            <h3>Connect across the world starting with POWOW </h3>
            <br></br>
            <p>Reconnect or Explore new conversations with friends accross the web.</p>
          </CardContent>
          <CardActions>
            <Button href="/chatOptions" size="small">Start exploring</Button>
          </CardActions>
        </Card>
        {/* <Card sx={{ minWidth: 300, maxWidth: 300 }}>
          <CardContent>
            <p>Start connecting</p>
          </CardContent>
          <CardActions>
            <Button size="small">Join random lobby</Button>
          </CardActions>
        </Card> */}
        <div id="globalChat">
          <ChatRoom socket={props.socket} userName={userName} roomId={'-1'} />
        </div>
      </Box>
      {/* <ContactForm/> */}
    </div>
  );
};
export default Home;
