'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import { socket } from '../(utils)/socket';
import { useSearchParams } from 'next/navigation';
import ScrollToBottom from 'react-scroll-to-bottom';
//import '../css/components/ChatRoom.css';

const ChatRoom = props => {
  const [message, setMessage] = useState('');
  const [allMessages, setAllMessages] = useState([]);
  const searchParams = useSearchParams();
  const roomId = props.roomId;
  const userName = searchParams.get('userName');

  ChatRoom.propTypes = {
    roomId: PropTypes.string
  };

  useEffect(() => {
    fetchMsg(roomId);
  }, []);

  // fetch persistent messages from db
  const fetchMsg = async room => {
    const url = `http://localhost:3000/api/room/${room}`;
    await fetch(url, { method: 'GET' })
      .then(response => response.json())
      .then(data => setAllMessages(data.messages))
      .catch(err => console.log(err));

    //listening for new messages
    socket.on('receivedMessage', msgData => {
      console.log('received message', msgData);
      setAllMessages(prev => [...prev, msgData]);
    });
  };

  //async to wait for message to be sent
  const sendMessage = async () => {
    if (message !== '') {
      const msgData = {
        room: roomId,
        user: userName,
        message: message,
        time: new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes()
      };
      console.log('sending', msgData);
      socket.emit('sendMessage', msgData);
      //add message to message list
      setAllMessages(prev => [...prev, msgData]);
      //empties text box
      setMessage('');
    }
  };

  // remove previous messages in db and client
  const clearMessage = async () => {
    setAllMessages([]);
    const url = `http://localhost:3001/room/${roomId}`;
    await fetch(url, { method: 'DELETE' });
  };

  return (
    <div id="chatRoomPage">
      <div className="chatContainer">
        <div className="body">
          <div className="messageScrollContainer">
            <Stack direction="column" spacing={0.3}>
              {allMessages.map((message, index) => {
                if (message.user === userName) {
                  return (
                    <Box
                      key={index}
                      sx={{
                        display: 'flex',
                        justifyContent: 'flex-end'
                      }}
                    >
                      <Chip
                        sx={{ fontSize: 16, p: 1, backgroundColor: '#0440CB', color: '#D6E4E5' }}
                        className="chip"
                        label={`${message.message}`}
                      />
                    </Box>
                  );
                }
                //
                else {
                  if (index !== 0 && allMessages[index - 1].user === allMessages[index].user) {
                    return (
                      <div key={index}>
                        <Chip
                          sx={{ fontSize: 16, p: 1, backgroundColor: '#3d4451', color: '#D6E4E5' }}
                          variant="Filled"
                          label={`${message.message}`}
                        />
                      </div>
                    );
                  }
                  return (
                    <div key={index}>
                      <p className="messageHeader">{`${message.user} ${message.time}`}</p>
                      <Chip
                        sx={{ fontSize: 16, p: 2, backgroundColor: '#3d4451', color: '#D6E4E5' }}
                        variant="Filled"
                        label={`${message.message}`}
                      />
                    </div>
                  );
                }
              })}
            </Stack>
          </div>
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
              color="warning"
              onChange={e => {
                setMessage(e.target.value);
              }}
              onKeyPress={e => {
                if (e.key === 'Enter') {
                  sendMessage(message);
                }
              }}
            />
            <Button variant="outlined" onClick={sendMessage} endIcon={<SendIcon />}></Button>
          </Box>
        </div>
      </div>
    </div>
  );
};
export default ChatRoom;
