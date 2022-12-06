import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { ChatRoom } from '../components/ChatRoom';
import { VideoRoom } from '../components/Videoroom';

export const Room = props => {
  const { id } = useParams();
  const socket = props.socket;

  useEffect(() => {
    const joinAttempt = async room => {
      const url = `http://localhost:3001/room/${room}`;
      await fetch(url, { method: 'GET' })
        .then(response => response.json())
        // redirect to home if room does not exist
        .catch(err => console.log(err));
    };
    joinAttempt(String(id));
    // successfully joined room
  }, []);

  Room.propTypes = {
    socket: PropTypes.object,
    userName: PropTypes.string
  };
  return (
    <>
      {/* {<VideoRoom />} */}
      <ChatRoom socket={socket} userName={props.userName} roomId={id} />
    </>
  );
};
