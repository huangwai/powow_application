import { useNavigate } from 'react-router-dom';
import React from 'react';

function HomeButton() {
  const navigate = useNavigate();

  const Button = () => {
    navigate('/');
  };
  return (
    <div id="logobuttons">
      <button onClick={Button}> POWOW</button>
    </div>
  );
}

export default HomeButton;
