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
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import ChatIcon from '@mui/icons-material/Chat';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import EmailIcon from '@mui/icons-material/Email';
import InfoIcon from '@mui/icons-material/Info';
import FlutterDashIcon from '@mui/icons-material/FlutterDash';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { useNavigate } from 'react-router-dom';

export const MenuBar = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const handleDrawer = () => {
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <div>
      <AppBar position="fixed" sx={{ zIndex: theme => theme.zIndex.drawer + 1, bgcolor: '#3949ab' }}>
        <Toolbar>
          <IconButton onClick={handleDrawer} size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
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
          width: 186,
          [`& .MuiDrawer-paper`]: { background: '#e8eaf6' }
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <Toolbar />
        <List>
          <ListItem key={'Home'} disablePadding>
            <ListItemButton onClick={() => navigate('/')}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={'Home'} />
            </ListItemButton>
          </ListItem>
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
    </div>
  );
};
