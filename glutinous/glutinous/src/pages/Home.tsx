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
    </div>
  );
};

export default Home;
