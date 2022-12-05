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
const Chat = props => {
    let currentDate = new Date();
    let userName = 'user' + currentDate.getHours() + currentDate.getMinutes() + currentDate.getSeconds();
  
    Chat.propTypes = {
      socket: PropTypes.object
    };
    return (
      <div className="Chat">
        <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
          <Card sx={{ minWidth: 300, maxWidth: 300 }}>
            <CardContent>
              <p>POWOW </p>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card sx={{ minWidth: 300, maxWidth: 300 }}>
            <CardContent>
              <p>Start connecting</p>
            </CardContent>
            <CardActions>
              <Button size="small">Join random lobby</Button>
            </CardActions>
          </Card>
          <div id="globalChat">
            <ChatRoom socket={props.socket} userName={userName} roomId={'-1'} />
          </div>
        </Box>
      </div>
    );
  };
  export default Chat;