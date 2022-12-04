import { useNavigate } from 'react-router-dom';
import React from 'react';

function Chat() {
  return (
    <div id="globalChat">
          <ChatRoom socket={props.socket} userName={userName} roomId={'-1'} />
        </div>
  );
}
export default Chat;