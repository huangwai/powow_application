'use client';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { ChatRoom } from '../chat';
//import { useLocation } from 'react-router-dom';

//import Video from '../components/Video';
//import '../css/pages/PublicChat.css';

const Room = ({ params }) => {
  const id = params.id;

  //const { id } = useParams();
  // const { state } = useLocation();
  //const { rtcToken, userName } = state;

  const joinAttempt = async room => {
    const url = `http://localhost:3001/room/${room}`;
    await fetch(url, { method: 'GET' }).then(response => response.json());
    // successfully joined room
    // .then(data => setAllMessages(data.messages));
    // redirect to error if room does not exist
    //.catch(() => navigate('error'));
  };
  const disconnect = async room => {
    console.log(`user ${userName} disconnected`);
    const url = `http://localhost:3001/room/${room}/disconnect`;
    await fetch(url, { method: 'POST' })
      .then(response => response.json())
      .catch(e => console.log(e));
  };

  useEffect(() => {
    //componentDidMount\
    //joinAttempt(String(id));

    //componentWillUnmount
    return () => {
      //console.log('I AM UNMOUNTING');
      //disconnect(String(id))
    };
  }, []);

  Room.propTypes = {
    socket: PropTypes.object,
    userName: PropTypes.string
  };

  return (
    <div className="public-chat">
      <div className="one">
        {/* <Video socket={props.socket} userName={userName} roomId={String(id)} rtcToken={rtcToken} /> */}
      </div>
      <ChatRoom userName={'temp'} roomId={String(id)} />
    </div>
  );
};
export default Room;
