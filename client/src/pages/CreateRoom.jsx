import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';






// import Grid from '@mui/material/Grid';

/*
Create Room page component
 */
const CreateRoom = props => {
  const [userName, setUsername] = useState('');
  const [roomId, setRoomId] = useState('');
  const [error, setError] = React.useState(false);
  const socket = props.socket;
  const navigate = useNavigate();



  const joinRoom = async () => {
    let token = ''
    if (userName !== '' && roomId !== '') {
      let url = `http://localhost:3001/rtc/${roomId}/publisher/uid/${userName}`;
      await fetch(url, { method: 'GET' })
        .then(response => response.json())
        .then(data => {
          token = data.rtcToken
          console.log("Token12: " + token)
        })

      url = `http://localhost:3001/room/${roomId}`;
      await fetch(url, { method: 'GET' })
        .then(response => response.json())
        // there was room so send error unable to create room
        .then(() => {
          setError(true);
          console.log('there was room so send error unable to create room');
        })
        // there was no room with the id so create room
        .catch(() => {
          console.log(`created room userName: ${userName}, roomId: ${roomId}`);
          createRoom(token)
        });
    }
  };

  const createRoom = async(token) => {
    await socket.emit('createRoom', roomId);
    await navigate('/room/' + roomId, {state: {rtcToken: token, userName: userName}});
  }

  CreateRoom.propTypes = {
    socket: PropTypes.object
  };
  return (
    <div className="joinContainer">
      <Collapse in={error}>
        <Alert
          severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setError(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          A room already exists with that ID
        </Alert>
      </Collapse>

      <Stack direction="row" spacing={15} justifyContent="center" alignItems="center">
      <Card sx={{ bgcolor: '#0466C8' }} color="success">
        <Box display="flex" justifyContent="center" alignItems="center" sx={{ m: 10 }}>
          <CardContent >
          <Typography sx={{ fontWeight: 'bold' }} variant="h4" color = "white" gutterBottom>
            Create room
            </Typography>
            <TextField sx={{ input: { color: 'white' } }} id="outlined-basic" label="Name" variant="outlined" 
          type="text"
          placeholder="name"
          onChange={e => {
            setUsername(e.target.value);
          }}
        />
            <TextField sx={{ input: { color: 'white' } }} id="outlined-basic" label="Room ID" variant="outlined"
          type="text"
          placeholder="room id"
          onChange={e => {
            setRoomId(e.target.value);
          }}
        />
          </CardContent>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center" sx={{ mb: 10 }}>
          <CardActions>
            <Button sx = {{backgroundColor: "white",fontWeight: 'bold'}} size="large" variant="outlined" onClick={joinRoom}>
              Create Room
            </Button>
          </CardActions>
        </Box>
      </Card>
      </Stack>
        {/* <p>Create room</p>
        <input
          type="text"
          placeholder="name"
          onChange={e => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="room id"
          onChange={e => {
            setRoomId(e.target.value);
          }}
        />
        <Button onClick={joinRoom} variant="contained">
          Create Room
        </Button> */}
      
    </div>
  );
};
export default CreateRoom;
