import React, { useEffect, useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';

interface MyDialogProps {
  page1Text: string;
  page2Text: string;
}

const MyDialog: React.FC<MyDialogProps> = ({ page1Text, page2Text }) => {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const cachedOpen = localStorage.getItem('dialogOpen');
    if (cachedOpen === null) {
      setOpen(true);
    } else {
      setOpen(cachedOpen === 'true');
    }
  }, []);

  const handleClose = () => {
    if (page === 1) {
      setPage(2);
    } else {
      setOpen(false);
      localStorage.setItem('dialogOpen', 'false');
    }
  };

  const handleBack = () => {
    setPage(1);
  };

  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
  };

  return (
      <Dialog open={open} onClose={handleClickOutside} PaperProps={{ style: { backgroundColor: '#FFDAB9' } }}>
        <DialogTitle>Disclaimer {page}/2</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {page === 1 ? page1Text : page2Text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {page === 1 ? (
            <Button onClick={handleClose}>Next</Button>
          ) : (
            <>
              <Button onClick={handleBack}>Back</Button>
              <Button onClick={handleClose}>Confirm</Button>
            </>
          )}
        </DialogActions>
      </Dialog>
  );
};

export default MyDialog;
