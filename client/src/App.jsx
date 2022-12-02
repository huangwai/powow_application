import React from 'react';
import Box from '@mui/material/Box';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import JoinRoom from './pages/JoinRoom';
import CreateRoom from './pages/CreateRoom';
import About from './pages/About';
import { MenuBar } from './components/MenuBar';
import io from 'socket.io-client';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const socket = io.connect('http://localhost:3001');

  return (
    <div className="App">
      <Box sx={{ display: 'flex' }}>
        <MenuBar />
        <Box component="main" sx={{ flexGrow: 1, ml: 5, mr: 5, mt: 13, mb: 5 }}>
          <Routes>
            <Route exact path="/" element={<Home socket={socket} />} />
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
