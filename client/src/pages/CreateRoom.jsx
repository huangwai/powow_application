//import HomeButton from '../components/HomeButton.jsx';
import React from 'react';
import { DropdownButton, Dropdown, Button, Form } from 'react-bootstrap';

function CreateRoom() {
  return (
    <div id="createRoomPage">
      <Form>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Room Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Room Name" />
        </Form.Group>
      </Form>
      <DropdownButton id="dropdown-basic-button" title="Room Size">
        <Dropdown.Item>1</Dropdown.Item>
        <Dropdown.Item>2</Dropdown.Item>
        <Dropdown.Item>3</Dropdown.Item>
        <Dropdown.Item>4</Dropdown.Item>
        <Dropdown.Item>5</Dropdown.Item>
        <Dropdown.Item>6</Dropdown.Item>
      </DropdownButton>
      <Button variant="dark">Create Room</Button>
    </div>
  );
}
export default CreateRoom;
