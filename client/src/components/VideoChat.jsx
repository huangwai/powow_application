import React, { useEffect, useState } from 'react';
import AgoraRTC from 'agora-rtc-sdk-ng';
import { VideoPlayer } from './VideoPlayer';
import PropTypes from 'prop-types';
import Stack from '@mui/material/Stack';
import '../css/components/VideoChat.css';

//const uuid = require("uuid/v4")

const APP_ID = '0bb291f858984709810afc67fd472532';
const TOKEN =
  '007eJxTYPgvXGr+I2Rl3KEqadlNa/2/vDl8sLTE/G0ml+mzH3NKNS8pMBgkJRlZGqZZmFpYWpiYG1haGBokpiWbmaelmJgbmRobcZ3sS24IZGQwashhYIRCEJ+FoSS1uISBAQCcVR/W';
const CHANNEL = 'test';

const client = AgoraRTC.createClient({
  mode: 'rtc',
  codec: 'vp8'
});

const VideoChat = props => {
  const [users, setUsers] = useState([]);
  const [localTracks, setLocalTracks] = useState([]);

  const handleUserJoined = async (user, mediaType) => {
    await client.subscribe(user, mediaType);

    if (mediaType === 'video') {
      setUsers(previousUsers => [...previousUsers, user]);
    }

    if (mediaType === 'audio') {
       //user.audioTrack.play()
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

  VideoChat.propTypes = {
    socket: PropTypes.object,
    roomId: PropTypes.string,
    userName: PropTypes.string
  }

  return (
    <div>
      <Stack 
        direction="row" 
        spacing={2}
        alignItems="center"
        justifyContent="center">
        {users.map(user => (
          <VideoPlayer key={user.uid} user={user} />
        ))}
      </Stack>
    </div>
  );
};
export default VideoChat