//import HomeButton from '../components/HomeButton.jsx';
import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CreateRoom = props => {
  const [userName, setUsername] = useState('');
  const [roomId, setRoomId] = useState('');
  const socket = props.socket;
  const navigate = useNavigate();

  const joinRoom = async () => {
    if (userName !== '' && roomId !== '') {
      const url = `http://localhost:3001/room/${roomId}`;
      await fetch(url, { method: 'GET' })
        .then(response => response.json())
        // there was room so send error unable to create room
        .then(() => {
          navigate(`/error`);
          console.log('there was room so send error unable to create room');
        })
        // there was no room with the id so create room
        .catch(() => {
          console.log(`created room userName: ${userName}, roomId: ${roomId}`);
          socket.emit('CreateRoom', roomId);
          navigate('/room/' + roomId);
        });
    }
  };
  CreateRoom.propTypes = {
    socket: PropTypes.object
  };
  return (
    <>
      <div className="joinContainer">
        <p>Create room</p>
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
          Create Room
        </Button>
      </div>
    </>
  );
};
export default CreateRoom;
