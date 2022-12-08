import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
//import '../css/pages/CardOptions'

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%'
});

const ComplexGrid = props => {
  const [userName, setUsername] = useState('');
  const [roomId, setRoomId] = useState('');
  const socket = props.socket;

  let rtcToken = '';
  const joinRoom = async () => {
    setRoomId('123');
    let currentDate = new Date();
    setUsername('user' + currentDate.getHours() + currentDate.getMinutes() + currentDate.getSeconds());
    if (userName !== '' && roomId !== '') {
      let url = `http://localhost:3001/rtc/${roomId}/audience/uid/${userName}`;
      await fetch(url, { method: 'GET' })
        .then(response => response.json())
        .then(data => {
          rtcToken = data.rtcToken;
          console.log('Token12: ' + rtcToken);
        });
      url = `http://localhost:3001/room/${roomId}`;
      await fetch(url, { method: 'GET' })
        .then(response => response.json())
        .then(() => {
          // room exists so join room
          console.log(`joined room userName: ${userName}, roomId: ${roomId}`);
          join(rtcToken);
        });
    }
  };

  const join = async rtcToken => {
    await socket.emit('joinRoom', roomId);
    await navigate('/room/' + roomId, { state: { rtcToken: rtcToken, userName: userName } });
  };
  ComplexGrid.propTypes = {
    socket: PropTypes.object
  };
  const navigate = useNavigate();
  return (
    <Stack sx={{ m: 10 }} direction="row" spacing={10} justifyContent="center" alignItems="center" className="cards">
      <Card sx={{ bgcolor: '#141823', height: 400, width: 400 }}>
        <Box display="flex" justifyContent="center" alignItems="center" sx={{ m: 10, mt: 5, ml: 5, mr: 5 }}>
          <CardContent>
            <Typography sx={{ fontWeight: 'bold' }} variant="h4" color="white" gutterBottom>
              Create a Room
            </Typography>
            <Typography variant="body2" color="white" gutterBottom>
              Allows users to create their own room
            </Typography>
            <Typography variant="body2" color="white">
              Share your ID for others to join
            </Typography>
          </CardContent>
        </Box>
        <Box display="flex" justifyContent="center" sx={{ mb: 5, alignItems: 'flex-end' }}>
          <CardActions>
            <Button
              sx={{ backgroundColor: '#0440CB', fontWeight: 'bold', color: 'white', width: 200 }}
              size="large"
              variant="outlined"
              onClick={() => navigate('/createRoom')}
            >
              Create
            </Button>
          </CardActions>
        </Box>
      </Card>
      <Card sx={{ bgcolor: '#141823', height: 400, width: 400 }}>
        <Box display="flex" justifyContent="center" alignItems="center" sx={{ m: 10, mt: 5 }}>
          <CardContent>
            <Typography sx={{ fontWeight: 'bold' }} variant="h4" color="white" gutterBottom>
              Join a Room
            </Typography>
            <Typography variant="body2" color="white" gutterBottom>
              Allows users to join other users room
            </Typography>
            <Typography variant="body2" color="white">
              Join others by entering room ID
            </Typography>
          </CardContent>
        </Box>
        <Box display="flex" justifyContent="center" sx={{ mb: 10, alignItems: 'flex-end' }}>
          <CardActions>
            <Button
              sx={{ backgroundColor: '#0440CB', fontWeight: 'bold', color: 'white', width: 200 }}
              size="large"
              variant="outlined"
              onClick={() => navigate('/joinRoom')}
            >
              Join
            </Button>
          </CardActions>
        </Box>
      </Card>
      <Card sx={{ bgcolor: '#141823', height: 400, width: 400 }}>
        <Box display="flex" justifyContent="center" alignItems="center" sx={{ m: 10, mt: 5 }}>
          <CardContent>
            <Typography sx={{ fontWeight: 'bold' }} variant="h4" color="white" gutterBottom>
              Public Chat
            </Typography>
            <Typography variant="body2" color="white" gutterBottom>
              Allows users to chat with anyone
            </Typography>
            <Typography variant="body2" color="white">
              Anyone can join!
            </Typography>
          </CardContent>
        </Box>
        <Box display="flex" justifyContent="center" sx={{ mb: 5, alignItems: 'flex-end' }}>
          <CardActions>
            <Button
              sx={{ backgroundColor: '#0440CB', fontWeight: 'bold', color: 'white', width: 200 }}
              size="large"
              variant="outlined"
              onClick={joinRoom}
            >
              Explore
            </Button>
          </CardActions>
        </Box>
      </Card>
    </Stack>
  );
};
export default ComplexGrid;
