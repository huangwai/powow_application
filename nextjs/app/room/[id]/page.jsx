import React from 'react';
import PropTypes from 'prop-types';
import ChatRoom from '../chat';
import Video from '../video';
//import '../css/pages/PublicChat.css';

const Room = ({ params }) => {
  const id = params.id;

  const joinAttempt = async room => {
    const url = `http://localhost:3001/room/${room}`;
    await fetch(url, { method: 'GET' }).then(response => response.json());
    // successfully joined room
    // .then(data => setAllMessages(data.messages));
    // redirect to error if room does not exist
    // .catch(() => navigate('error'));
  };
  const disconnect = async room => {
    console.log(`user ${userName} disconnected`);
    const url = `http://localhost:3001/room/${room}/disconnect`;
    await fetch(url, { method: 'POST' })
      .then(response => response.json())
      .catch(e => console.log(e));
  };

  return (
    <div className="public-chat">
      <div className="one">
        <Video roomId={String(id)} />
      </div>
      <ChatRoom roomId={String(id)} />
    </div>
  );
};
export default Room;
