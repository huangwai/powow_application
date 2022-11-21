import React, { useEffect, useState } from 'react';
import AgoraRTC from 'agora-rtc-sdk-ng';
import { VideoPlayer } from '../components/VideoPlayer';
import { ChatRoom } from '../components/ChatRoom';
import PropTypes from 'prop-types';

//const uuid = require("uuid/v4")

const APP_ID = '0bb291f858984709810afc67fd472532';
const TOKEN =
  '007eJxTYHDwLEnfe+2ivK6HpDDrw2fnEw+s098mEZ9TICIafW2dX4ICg0FSkpGlYZqFqYWlhYm5gaWFoUFiWrKZeVqKibmRqbFR5dqy5IZARgYtaUdmRgYIBPFZGEpSi0sYGACJThwm';
const CHANNEL = 'test';

const client = AgoraRTC.createClient({
  mode: 'rtc',
  codec: 'vp8'
});

export const VideoRoom = props => {
  const [users, setUsers] = useState([]);
  const [localTracks, setLocalTracks] = useState([]);

  const handleUserJoined = async (user, mediaType) => {
    await client.subscribe(user, mediaType);

    if (mediaType === 'video') {
      setUsers(previousUsers => [...previousUsers, user]);
    }

    if (mediaType === 'audio') {
      // user.audioTrack.play()
    }
  };

  const handleUserLeft = user => {
    setUsers(previousUsers => previousUsers.filter(u => u.uid !== user.uid));
  };

  useEffect(() => {
    client.on('user-published', handleUserJoined);
    client.on('user-left', handleUserLeft);

    client
      .join(APP_ID, CHANNEL, TOKEN, null)
      .then(uid => Promise.all([AgoraRTC.createMicrophoneAndCameraTracks(), uid]))
      .then(([tracks, uid]) => {
        const [audioTrack, videoTrack] = tracks;
        setLocalTracks(tracks);
        setUsers(previousUsers => [
          ...previousUsers,
          {
            uid,
            videoTrack,
            audioTrack
          }
        ]);
        client.publish(tracks);
      });

    return () => {
      for (let localTrack of localTracks) {
        localTrack.stop();
        localTrack.close();
      }
      client.off('user-published', handleUserJoined);
      client.off('user-left', handleUserLeft);
      client.unpublish(tracks).then(() => client.leave());
    };
  }, []);
  VideoRoom.propTypes = {
    socket: PropTypes.object,
    roomId: PropTypes.string,
    userName: PropTypes.string
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 200px)'
        }}
      >
        {users.map(user => (
          <VideoPlayer key={user.uid} user={user} />
        ))}
      </div>
      <ChatRoom socket={props.socket} userName={props.userName} roomId={props.roomId} />
    </div>
  );
};
