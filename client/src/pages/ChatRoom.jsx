import HomeButton from '../components/HomeButton.jsx';
import { useState, useEffect } from 'react';
const ChatRoom = (props) => {
  const [userName, setUsername] = useState('');
  const [roomId, setRoomId] = useState('');
  const [message, setMessage] = useState('');
  const socket = props.socket;
  const joinRoom = () => {
    if (userName !== '' && roomId !== '') {
      //pass roomId to backend socket
      console.log(`userName: ${userName}, roomId: ${roomId}`);
      socket.emit('joinRoom', roomId);
    }
  };
  //async to wait for message to be sent
  const sendMessage = async () => {
    if (message !== '') {
      const msgData = {
        room: roomId,
        userName: userName,
        message: message,
        time: new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes()
      };
      console.log('sending', msgData);
      await socket.emit('sendMessage', JSON.stringify(msgData));
    }
  };

  useEffect(() => {
    //listening for new messages
    socket.on('receivedMessage', (msgData) => {
      console.log('receivedMessage', msgData);
    });
  }, [socket]);

  return (
    <div id="chatRoomPage">
      <p>Chat Room Page Here</p>
      <input
        type="text"
        placeholder="name"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="room id"
        onChange={(e) => {
          setRoomId(e.target.value);
        }}
      />
      <button onClick={joinRoom}>Join room</button>
      <h1>Chat </h1>
      <div className="header"></div>
      <div className="body"></div>
      <div className="footer">
        <input
          type="text"
          placeholder="send message"
          onChange={(e) => {
            setMessage(e.target.value);
          }}></input>
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  );
};
export default ChatRoom;
