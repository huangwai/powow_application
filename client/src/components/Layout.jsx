import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from '../pages/Home';
import JoinRoom from '../pages/JoinRoom';
import CreateRoom from '../pages/CreateRoom';
import About from '../pages/About';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:3001');

export default class Layout extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar bg="dark" variant={'dark'} expand="lg">
            <Nav.Link as={Link} to="/">
              <Navbar.Brand href="#">POWOW</Navbar.Brand>
            </Nav.Link>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="mr-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                <Nav.Link as={Link} to="/createRoom">
                  Create Room
                </Nav.Link>
                <Nav.Link as={Link} to="/joinRoom">
                  Join Room
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  About
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/createRoom" element={<CreateRoom socket={socket} />} />
            <Route path="/joinRoom" element={<JoinRoom socket={socket} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
