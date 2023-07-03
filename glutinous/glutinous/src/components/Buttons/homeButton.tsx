import { useState, MouseEvent } from 'react';
import Button, { ButtonProps } from '@mui/material/Button';

interface ClickableButtonProps extends ButtonProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const ClickableButton = ({ onClick, ...props }: ClickableButtonProps) => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setClickCount((prevCount) => prevCount + 1);
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <>
      <Button onClick={handleClick} {...props} />
      <p>Button has been clicked {clickCount} times</p>
    </>
  );
};

export default ClickableButton;
