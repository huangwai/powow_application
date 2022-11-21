import React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
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
        msg: message,
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

  useEffect(() => {
    //listening for new messages
    socket.on('receivedMessage', msgData => {
      console.log('received message', msgData);
      setAllMessages(prev => [...prev, msgData]);
    });
  }, [socket]);

  ChatRoom.propTypes = {
    socket: PropTypes.object,
    roomId: PropTypes.string,
    userName: PropTypes.string
  };

  return (
    <div id="chatRoomPage">
      <div className="chatContainer">
        <div className="header">
          <h1>Chat </h1>
          <p>
            Room: {props.roomId} User: {props.userName}
          </p>
        </div>
        <div className="body">
          {allMessages.map((message, index) => {
            return <p key={index}>{`${message.user}: ${message.msg}`}</p>;
          })}
        </div>
        <div className="footer">
          <input
            type="text"
            value={message}
            placeholder="send message"
            onChange={e => {
              setMessage(e.target.value);
            }}
          ></input>
          <button onClick={sendMessage}>&#9658;</button>
        </div>
      </div>
    </div>
  );
};
