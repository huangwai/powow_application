'use client';
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//import '../css/components/VideoPlayer.css';

export const VideoPlayer = ({ user }) => {
  const ref = useRef();

  useEffect(() => {
    user.videoTrack.play(ref.current);
  }, []);

  VideoPlayer.propTypes = {
    user: PropTypes.object
  };

  return <div ref={ref} className="video-player"></div>;
};
