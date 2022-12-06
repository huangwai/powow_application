import React from 'react';
import Box from '@mui/material/Box';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import JoinRoom from './pages/JoinRoom';
import CreateRoom from './pages/CreateRoom';
import { Room } from './pages/Room';
import About from './pages/About';
import NoPage from './pages/NoPage';
import ContactForm from './components/ContactForm';
import io from 'socket.io-client';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GridTemplateColumns from './pages/ChatOptions';
import Footer from './components/Footer';
import ComplexGrid from './pages/ChatOptions2';
import Header from './components/Header';
import ResponsiveAppBar from './components/Header2';
import PublicChat from './pages/PublicChat';

function App() {
  const socket = io.connect('http://localhost:3001');

  return (
    <div className="App">
      <Header />
      {/*<ResponsiveAppBar />*/}
      <Box sx={{ display: 'flex' }}>
        {/* <MenuBar /> */}
        {/* <Header/> */}
        <Box component="main" sx={{ flexGrow: 1, ml: 5, mr: 5, mt: 13, mb: 5 }}>
          {/* <Header/> */}
          <Routes>
            <Route exact path="/" element={<Home socket={socket} />} />
            <Route exact path="/createRoom" element={<CreateRoom socket={socket} />} />
            <Route exact path="/joinRoom" element={<JoinRoom socket={socket} />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/chatOptions" element={<ComplexGrid />} />
            <Route exact path="/contact" element={<ContactForm />} />
            <Route exact path="/publicChat" element={<PublicChat />} />
            <Route exact path="/room/:id" element={<Room socket={socket} userName={'temp'} />} />
            <Route exact path="/*" element={<NoPage />} />
          </Routes>
        </Box>
      </Box>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
