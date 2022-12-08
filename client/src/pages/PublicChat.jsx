import VideoChat from '../components/VideoChat';
import { ChatRoom } from '../components/ChatRoom';
import PropTypes from 'prop-types';
import '../css/pages/PublicChat.css';

const PublicChat = props => {
  let currentDate = new Date();
  let userName = 'user' + currentDate.getHours() + currentDate.getMinutes() + currentDate.getSeconds();
  PublicChat.propTypes = {
    socket: PropTypes.object
  };

  return (
    <div className="public-chat">
      <div className="one">
        <VideoChat />
      </div>
      <ChatRoom socket={props.socket} userName={userName} roomId={'-1'} />
    </div>
  );
};

export default PublicChat;
