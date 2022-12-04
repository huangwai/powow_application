import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import JoinRoom from './JoinRoom';
import CreateRoom from './CreateRoom';
import { Button } from 'react-bootstrap';

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        p: 1,
        m: 1,
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default function GridTemplateColumns() {
  return (
    <div style={{ width: '100%' }}>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
        <Item>Joining Rooms</Item>
        <Item>Public Chat</Item>
        <Item>Create Room</Item>
        <Button onClick={event =>  window.location.href='/joinRoom'}>JOIN ROOMS</Button>
        <Button onClick={event =>  window.location.href='/publicChat'}>CHAT</Button>
        <Button onClick={event =>  window.location.href='/createRoom'}>CREATE ROOMS</Button>
      </Box>
    </div>
  );
}