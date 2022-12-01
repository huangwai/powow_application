import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import ChatIcon from '@mui/icons-material/Chat';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import EmailIcon from '@mui/icons-material/Email';
import InfoIcon from '@mui/icons-material/Info';
import FlutterDashIcon from '@mui/icons-material/FlutterDash';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import JoinRoom from './pages/JoinRoom';
import CreateRoom from './pages/CreateRoom';
import About from './pages/About';
import io from 'socket.io-client';
import { ChatRoom } from './components/ChatRoom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const socket = io.connect('http://localhost:3001');
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const handleDrawer = () => {
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <div className="App">
      <Box sx={{ display: 'flex' }}>
        <AppBar position="fixed" sx={{ zIndex: theme => theme.zIndex.drawer + 1, bgcolor: '#3949ab' }}>
          <Toolbar>
            <IconButton
              onClick={handleDrawer}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <FlutterDashIcon />
            </IconButton>
            <Button onClick={() => navigate('/')} color="inherit" size="large" sx={{ flexGrow: 1 }}>
              POWOW
            </Button>
            <div />
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <EmailIcon />
            </IconButton>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <NotificationsIcon />
            </IconButton>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <AccountCircleIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: 300,
            [`& .MuiDrawer-paper`]: { background: '#e8eaf6' }
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <Toolbar />
          <List>
            <ListItem key={'Chat'} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ChatIcon />
                </ListItemIcon>
                <ListItemText primary={'Chat'} />
              </ListItemButton>
            </ListItem>

            <ListItem key={'Create Room'} disablePadding>
              <ListItemButton onClick={() => navigate('/createRoom')}>
                <ListItemIcon>
                  <GroupAddIcon />
                </ListItemIcon>
                <ListItemText primary={'Create Room'} />
              </ListItemButton>
            </ListItem>

            <ListItem key={'Join Room'} disablePadding>
              <ListItemButton onClick={() => navigate('/joinRoom')}>
                <ListItemIcon>
                  <PersonAddAlt1Icon />
                </ListItemIcon>
                <ListItemText primary={'Join Room'} />
              </ListItemButton>
            </ListItem>

            <ListItem key={'About'} disablePadding>
              <ListItemButton onClick={() => navigate('/about')}>
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary={'About'} />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', mt: 10, p: 3 }}>
          <Card sx={{ minWidth: 300, maxWidth: 300 }}>
            <CardContent>
              <p>POWOW balhblahblhalb</p>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card sx={{ minWidth: 300, maxWidth: 300 }}>
            <CardContent>
              <p>Start connecting</p>
            </CardContent>
            <CardActions>
              <Button size="small">Join random lobby</Button>
            </CardActions>
          </Card>
          <div id="globalChat">
            <ChatRoom socket={socket} userName={'new user'} roomId={'-1'} />
          </div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/createRoom" element={<CreateRoom socket={socket} />} />
            <Route exact path="/joinRoom" element={<JoinRoom socket={socket} />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </Box>
      </Box>
    </div>
  );
}

export default App;
