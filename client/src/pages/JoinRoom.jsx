import React from 'react';
import { useState } from 'react';
//import { VideoRoom } from './VideoRoom';
import { ChatRoom } from '../components/ChatRoom';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
/*
Join Room page component
 */
const JoinRoom = props => {
  const [joinedRoom, setJoinedRoom] = useState(false);
  const [userName, setUsername] = useState('');
  const [roomId, setRoomId] = useState('');
  const socket = props.socket;

  const joinRoom = () => {
    if (userName !== '' && roomId !== '') {
      //pass roomId to backend socket
      console.log(`joined room userName: ${userName}, roomId: ${roomId}`);
      socket.emit('joinRoom', roomId);
      setJoinedRoom(true);
    }
  };

  JoinRoom.propTypes = {
    socket: PropTypes.object
  };
  return (
    <>
      {!joinedRoom ? (
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
      ) : (
        <>
          <ChatRoom socket={socket} userName={userName} roomId={roomId}></ChatRoom>
        </>
      )}
    </>
  );
};
export default JoinRoom;
