import { useState } from 'react';
//import { VideoRoom } from '../components/VideoRoom';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
/*
Join Room page component
 */
function JoinRoom() {
  const [joined, setJoined] = useState(false);

  return (
    <div className="JoinRoom">
      <Form>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Room ID</Form.Label>
          <Form.Control type="text" placeholder="Enter Room ID" />
        </Form.Group>
      </Form>
      <Button variant="dark">Join Room</Button>
    </div>
  );
}
export default JoinRoom;
