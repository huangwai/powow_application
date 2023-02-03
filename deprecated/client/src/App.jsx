import React from 'react';
import Box from '@mui/material/Box';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import JoinRoom from './pages/JoinRoom';
import CreateRoom from './pages/CreateRoom';
import { Room } from './pages/Room';
import About from './pages/About';
import NoPage from './pages/NoPage';
import ContactForm from './pages/Contact';
import io from 'socket.io-client';
import ComplexGrid from './pages/ChatOptions';
import Header from './components/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const socket = io.connect('http://localhost:3001');

  return (
    <div className="App">
      <Header />
      <Box sx={{ display: 'flex' }}>
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Routes>
            <Route exact path="/" element={<Home socket={socket} />} />
            <Route exact path="/createRoom" element={<CreateRoom socket={socket} />} />
            <Route exact path="/joinRoom" element={<JoinRoom socket={socket} />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/chatOptions" element={<ComplexGrid socket={socket} />} />
            <Route exact path="/contact" element={<ContactForm />} />
            <Route exact path="/room/:id" element={<Room socket={socket} userName={'temp'} />} />
            <Route exact path="/*" element={<NoPage />} />
          </Routes>
        </Box>
      </Box>
    </div>
  );
}

export default App;
