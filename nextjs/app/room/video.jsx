'use client';
import React, { useEffect, useState } from 'react';
import AgoraRTC from 'agora-rtc-sdk-ng';
import { VideoPlayer } from './videoPlayer';
import { useSearchParams } from 'next/navigation';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import '../../styles/VideoChat.css';
//const uuid = require("uuid/v4")

const APP_ID = '0bb291f858984709810afc67fd472532'; //process.env.APP_ID;
const client = AgoraRTC.createClient({
  mode: 'rtc',
  codec: 'vp8'
});

const VideoChat = props => {
  const [users, setUsers] = useState([]);
  const [localTracks, setLocalTracks] = useState([]);
  let tracks;

  const searchParams = useSearchParams();
  const roomId = props.roomId;
  const userName = searchParams.get('userName');
  const token = searchParams.get('rtcToken');

  VideoChat.propTypes = {
    roomId: PropTypes.string
  };

  const TOKEN = token;
  const CHANNEL = roomId;

  console.log('Token: ' + TOKEN);
  console.log('User Name: ' + userName);

  const handleUserJoined = async (user, mediaType) => {
    await client.subscribe(user, mediaType);

    if (mediaType === 'video') {
      setUsers(previousUsers => [...previousUsers, user]);
    }

    if (mediaType === 'audio') {
      user.audioTrack.play();
    }
  };

  const handleUserLeft = user => {
    setUsers(previousUsers => previousUsers.filter(u => u.uid !== user.uid));
  };

  useEffect(() => {
    client.on('user-published', handleUserJoined);
    client.on('user-left', handleUserLeft);

    client
      .join(APP_ID, CHANNEL, TOKEN, userName)
      .then(uid => Promise.all([AgoraRTC.createMicrophoneAndCameraTracks(), uid]))
      .then(([tracks1, uid]) => {
        tracks = tracks1;
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
      // eslint-disable-next-line no-undef
      client.unpublish(tracks).then(() => client.leave());
    };
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(users).map((user, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <VideoPlayer key={user.uid} user={user} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default VideoChat;
