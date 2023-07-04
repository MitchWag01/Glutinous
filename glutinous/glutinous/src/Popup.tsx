import * as React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';

const MyDialog = () => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const cachedOpen = localStorage.getItem('dialogOpen');
    if (cachedOpen === null) {
      setOpen(true);
    } else {
      setOpen(cachedOpen === 'true');
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
    localStorage.setItem('dialogOpen', 'false');
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Glutinous Message</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Hello... will finish 
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Acknowledge</Button>
      </DialogActions>
    </Dialog>
  );
};

export default MyDialog;
