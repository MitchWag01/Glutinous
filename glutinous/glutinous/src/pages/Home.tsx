import React from 'react';
import ClickableButton from '../components/Buttons/ClickableButton';
import Header from '../components/Headers/MainHeader';

const Home = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div>
      <Header></Header>
      <ClickableButton
        variant="contained"
        color="primary"
        onClick={handleClick}
        sx={{ borderRadius: '50%' }}
      >
        Click me!
      </ClickableButton>
    </div>
  );
};

export default Home;
