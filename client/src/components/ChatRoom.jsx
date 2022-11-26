import React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import '../css/components/ChatRoom.css';

export const ChatRoom = props => {
  const [message, setMessage] = useState('');
  const [allMessages, setAllMessages] = useState([]);
  const socket = props.socket;

  //async to wait for message to be sent
  const sendMessage = async () => {
    if (message !== '') {
      const msgData = {
        room: props.roomId,
        user: props.userName,
        message: message,
        time: new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes()
      };
      console.log('sending', msgData);
      await socket.emit('sendMessage', msgData);
      //add message to message list
      setAllMessages(prev => [...prev, msgData]);
      //empties text box
      setMessage('');
    }
  };

  // remove previous messages in db and client
  const clearMessage = async () => {
    const url = `http://localhost:3001/room/${props.roomId}`;
    await fetch(url, { method: 'DELETE' });
    setAllMessages([]);
  };

  useEffect(() => {
    //listening for new messages
    socket.on('receivedMessage', msgData => {
      console.log('received message', msgData);
      setAllMessages(prev => [...prev, msgData]);
    });
  }, [socket]);

  useEffect(() => {
    // fetch persistent messages from db
    const fetchMsg = async room => {
      const url = `http://localhost:3001/room/${room}`;
      const res = await fetch(url, { method: 'GET' });
      const data = await res.json();
      setAllMessages(data.messages);
    };
    fetchMsg(props.roomId);
  }, []);

  ChatRoom.propTypes = {
    socket: PropTypes.object,
    roomId: PropTypes.string,
    userName: PropTypes.string
  };

  return (
    <div id="chatRoomPage">
      <Box className="header" sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton size="large" color="inherit">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Room: {props.roomId}
            </Typography>
            <Button color="inherit" startIcon={<PeopleAltIcon />} />
            <Button color="inherit" onClick={clearMessage} startIcon={<DeleteIcon />} />
          </Toolbar>
        </AppBar>
      </Box>
      <div className="chatContainer">
        <div className="body">
          <Stack direction="column" spacing={0.3}>
            {allMessages.map((message, index) => {
              if (message.user === props.userName) {
                return (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-end'
                    }}
                  >
                    <Chip sx={{ fontSize: 16, p: 1 }} color="primary" label={`${message.message}`} />
                  </Box>
                );
              } else {
                return (
                  <div key={index}>
                    <p className="messageHeader">{`${message.user} ${message.time}`}</p>
                    <Chip sx={{ fontSize: 16, p: 1 }} variant="outlined" label={`${message.message}`} />
                  </div>
                );
              }
            })}
          </Stack>
        </div>
        <div className="footer">
          <Box sx={{ display: 'flex' }}>
            <TextField
              sx={{ flexGrow: 1 }}
              className="messageField"
              size="small"
              value={message}
              variant="outlined"
              label="Send Message"
              onChange={e => {
                setMessage(e.target.value);
              }}
              onKeyPress={e => {
                if (e.key === 'Enter') {
                  sendMessage(message);
                }
              }}
            />
            <Button variant="outlined" onClick={sendMessage} endIcon={<SendIcon />}>
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
};
