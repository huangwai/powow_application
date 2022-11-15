import HomeButton from '../components/HomeButton.jsx';
import { useState, useEffect } from 'react';
const ChatRoom = (props) => {
  const [userName, setUsername] = useState('');
  const [roomId, setRoomId] = useState('');
  const [message, setMessage] = useState('');
  const [allMessages, setAllMessages] = useState([]);
  const [joinedRoom, setJoinedRoom] = useState(false);
  const socket = props.socket;

  const joinRoom = () => {
    if (userName !== '' && roomId !== '') {
      //pass roomId to backend socket
      console.log(`joined room userName: ${userName}, roomId: ${roomId}`);
      socket.emit('joinRoom', roomId);
      setJoinedRoom(true);
    }
  };

  //async to wait for message to be sent
  const sendMessage = async () => {
    if (message !== '') {
      const msgData = {
        room: roomId,
        user: userName,
        msg: message,
        time: new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes()
      };
      console.log('sending', msgData);
      await socket.emit('sendMessage', msgData);
      //add message to message list
      setAllMessages((prev) => [...prev, msgData]);
      //empties text box
      setMessage('');
    }
  };

  useEffect(() => {
    //listening for new messages
    socket.on('receivedMessage', (msgData) => {
      console.log('received message', msgData);
      setAllMessages((prev) => [...prev, msgData]);
    });
  }, [socket]);

  return (
    <div id="chatRoomPage">
      <p>Chat Room Page Here</p>
      {!joinedRoom ? (
        <div className="joinContainer">
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
        </div>
      ) : (
        <div className="chatContainer">
          <div className="header">
            <h1>Chat </h1>
            <p>Room: {roomId}</p>
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
              onChange={(e) => {
                setMessage(e.target.value);
              }}></input>
            <button onClick={sendMessage}>&#9658;</button>
          </div>
        </div>
      )}
    </div>
  );
};
export default ChatRoom;
