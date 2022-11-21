import React from 'react';
import { useState } from 'react';
import { VideoRoom } from '../components/VideoRoom';
import { Button } from 'react-bootstrap';
/*
Join Room page component
 */
function Home() {
  const [joined, setJoined] = useState(false);

  return (
    <div className="Home">
      {!joined && (
        <Button variant="secondary" onClick={() => setJoined(true)}>
          Random Room
        </Button>
      )}

      {joined && (
        <>
          <VideoRoom />
        </>
      )}
    </div>
  );
}
export default Home;
