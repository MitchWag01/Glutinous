import { useState } from "react";
import { Button, ButtonProps } from '@mui/material';
import { MouseEvent } from 'react';

interface ClickableButtonProps extends ButtonProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const MainCameraButton = ({ onClick, ...props }: ClickableButtonProps) => {
  const [clickCount, setClickCount] = useState(0);
  console.log(clickCount)

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setClickCount((prevCount) => prevCount + 1);
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <>
      <Button
        onClick={handleClick}
        sx={{
          position: 'relative',
          width: '180px',
          height: '180px',
          borderRadius: '50%',
          padding: '0',
          bgcolor: 'transparent',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 'calc(100% - 0px)',
            height: 'calc(100% - 0px)',
            borderRadius: '50%',
            border: '4px solid orange',
            borderColor:'primary.main'
          },
         
          '&:hover': {
            bgcolor: 'primary.main',
          },
          '&:focus': {
            outline: 'none',
          },
        }}
        {...props}
      >
        <img
          src="/images/LogoMakr-2ND0aW.png"
          alt="Button Icon"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '70%',
            height: '70%',
            objectFit: 'cover',
          }}
        />
      </Button>
    </>
  );
};

export default MainCameraButton;
