import React from 'react';
import { useState } from 'react';
//import { VideoRoom } from './VideoRoom';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
/*
Join Room page component
 */
const JoinRoom = props => {
  const [userName, setUsername] = useState('');
  const [roomId, setRoomId] = useState('');
  const socket = props.socket;
  const navigate = useNavigate();

  const joinRoom = async () => {
    if (userName !== '' && roomId !== '') {
      const url = `http://localhost:3001/room/${roomId}`;
      await fetch(url, { method: 'GET' })
        .then(response => response.json())
        .then(() => {
          // there was room so pass roomId to backend socket
          console.log(`joined room userName: ${userName}, roomId: ${roomId}`);
          socket.emit('joinRoom', roomId);
          navigate('/room/' + roomId);
        })
        // there was no room with the id so send error unable to join room
        .catch(err => {
          navigate(`/error`);
          console.log('cant there was no room with the id', err);
        });
    }
  };

  JoinRoom.propTypes = {
    socket: PropTypes.object
  };
  return (
    <>
      <div className="joinContainer">
        <p>Join room</p>
        <input
          type="text"
          placeholder="name"
          onChange={e => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="room id"
          onChange={e => {
            setRoomId(e.target.value);
          }}
        />
        <Button onClick={joinRoom} variant="dark">
          Join Room
        </Button>
      </div>
    </>
  );
};
export default JoinRoom;
