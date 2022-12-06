import { useNavigate } from 'react-router-dom';
import React from 'react';

function HomeButton() {
  const navigate = useNavigate();

  const Button = () => {
    navigate('/');
  };

  return (
    <div id="logobuttons">
      <button onClick={Button}> Return to Home</button>
    </div>
  );
}

export default HomeButton;
