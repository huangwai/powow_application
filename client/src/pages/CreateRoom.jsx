//import HomeButton from '../components/HomeButton.jsx';
import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const CreateRoom = props => {
  const [createdRoom, setCreatedRoom] = useState(false);
  const [userName, setUsername] = useState('');
  const [roomId, setRoomId] = useState('');
  const socket = props.socket;

  const joinRoom = () => {
    if (userName !== '' && roomId !== '') {
      //pass roomId to backend socket
      console.log(`joined room userName: ${userName}, roomId: ${roomId}`);
      socket.emit('joinRoom', roomId);
      setCreatedRoom(true);
    }
  };
  CreateRoom.propTypes = {
    socket: PropTypes.object
  };
  return (
    <>
      {!createdRoom ? (
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
      ) : (
        <>
          <p>Created room {roomId}</p>
        </>
      )}
    </>
  );
};
export default CreateRoom;
