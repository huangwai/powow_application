import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { ChatRoom } from '../components/Chat';
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
        <Card sx={{ m: 10, textDecoration: 'none', bgcolor: '#10131F' }}>
          <Box display="flex" justifyContent="center" alignItems="center" sx={{ m: 3, mt: 5, ml: 5, mr: 5 }}>
            <CardContent>
              <Typography variant="h4" color="white" gutterBottom>
                Reconnect or Explore new conversations with friends accross the web
              </Typography>
            </CardContent>
          </Box>
          <Box display="flex" justifyContent="center" sx={{ mb: 10, alignItems: 'flex-end' }}>
            <CardActions>
              <Button
                sx={{ backgroundColor: '#0440CB', fontWeight: 'bold', color: '#FFFFFF' }}
                size="large"
                variant="outlined"
                href="/chatOptions"
              >
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
