import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { ChatRoom } from '../components/ChatRoom';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import '../css/pages/Home.css';

/*
Join Room page component
 */
const Home = props => {
  let currentDate = new Date();
  let userName = 'user' + currentDate.getHours() + currentDate.getMinutes() + currentDate.getSeconds();

  Home.propTypes = {
    socket: PropTypes.object
  };
  return (
    <div className="Home">
      <Stack direction="row" justifyContent="center" alignItems="center">
      <Card sx={{ textDecoration: 'none', bgcolor: '#141823', minWidth: 100, maxWidth:800, minHeight: 100, maxHeight: 500 }} color="success">
        <Box display="flex" justifyContent="center" alignItems="center">
          <CardContent >
          <Typography sx={{ fontWeight: 'bold' }} justifyContent="flex-start" variant="h4" color = "white" gutterBottom>
          Chat with POWOW
            </Typography>
            <Typography variant="body2" justifyContent="flex-start" color = "white" gutterBottom >
            Reconnect or Explore new conversations with friends accross the web
            </Typography>
          </CardContent>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center" sx={{ mb: 10 }}>
          <CardActions>
            <Button sx = {{backgroundColor: "#0440CB",fontWeight: 'bold', color:"#FFFFFF"}} size="large" variant="outlined" href="/chatOptions">
            Start exploring
            </Button>
          </CardActions>
        </Box>
      </Card>
      {/* <box className="loader">
                    |<span>o</span><span>_</span><span>o</span>|<span>^</span><span>_</span><span>^</span>|<span>+</span><span>_</span><span>+</span>|
      </box> */}
      </Stack>
    </div>
  );
};
export default Home;
