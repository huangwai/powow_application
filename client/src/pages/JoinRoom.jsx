import { useState } from 'react';
import { VideoRoom } from '../components/VideoRoom';
/*
Join Room page component
 */
function JoinRoom(){
    const [joined, setJoined] = useState(false);

  return (
    <div className="JoinRoom">
      {!joined && (
        <button onClick={() => setJoined(true)}>
          Join Room
        </button>
      )}

      {joined && (
        <>
          <button onClick={() => setJoined(false)}>
            To Lobby
          </button>
          <VideoRoom />
        </>
      )}
    </div>
  );
}
export default JoinRoom