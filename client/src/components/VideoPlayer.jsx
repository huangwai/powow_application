import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export const VideoPlayer = ({ user }) => {
  const ref = useRef();

  useEffect(() => {
    user.videoTrack.play(ref.current);
  }, []);

  VideoPlayer.propTypes = {
    user: PropTypes.object
  };

  return (
    <div>
      Uid: {user.uid}
      <div ref={ref} style={{ width: '200px', height: '200px' }}></div>
    </div>
  );
};
