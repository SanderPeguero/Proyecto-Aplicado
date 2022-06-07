import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import ShoppingCart from '../ShoppingCart/ShoppingCart.jsx'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BasicModal = ({ open, setOpen, ItemCount }) => {

  const handleClose = () => setOpen(false);

  return (
    <div style={{ border: 'none'}}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={{ border: 'none', width: '17.6rem'}}>
          <ShoppingCart ItemCount={ItemCount}/>
        </Box>
      </Modal>
    </div>
    
  )
}

export default BasicModal