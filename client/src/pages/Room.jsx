import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { ChatRoom } from '../components/ChatRoom';
import { useNavigate, useLocation } from 'react-router-dom';
import VideoChat from '../components/VideoChat';
import '../css/pages/PublicChat.css';

export const Room = props => {
  const { id } = useParams();
  const socket = props.socket;
  const navigate = useNavigate();
  const {state} = useLocation();
  const {rtcToken, userName} = state

  console.log("Token1: " + rtcToken)

  useEffect(() => {
    const joinAttempt = async room => {
      const url = `http://localhost:3001/room/${room}`;
      await fetch(url, { method: 'GET' })
        .then(response => response.json())
        // redirect to home if room does not exist
        //.catch(() => navigate('error'));
    };
    joinAttempt(String(id));
    // successfully joined room
  }, []);

  Room.propTypes = {
    socket: PropTypes.object,
    userName: PropTypes.string
  };
  return (
    <div className='public-chat'>
      <div className='one'>
        <VideoChat socket={props.socket} userName={userName} roomId={String(id)} rtcToken={rtcToken}/>
      </div>
      <ChatRoom socket={props.socket} userName={userName} roomId={String(id)} />
    </div>
  );
};