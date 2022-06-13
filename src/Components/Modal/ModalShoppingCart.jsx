import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import ShoppingCart from '../ShoppingCart/ShoppingCart.jsx'
import CloseIcon from '@mui/icons-material/Close';
import Fab from '@mui/material/Fab';


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

const BasicModal = ({ open, setOpen, ItemCount, shoppingCart, setShoppingCart }) => {

  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={{ border: 'none'}}>
          <Fab size='small' color="primary" aria-label="cerrar" onClick={handleClose} style={{ background: 'black', alignSelf: 'inherit', borderRight: '3rem', float: 'right'}}>
            <CloseIcon style={{ color: 'white' }}></CloseIcon>
          </Fab>
          <ShoppingCart shoppingCart={shoppingCart} setShoppingCart={setShoppingCart}/>
        </Box>
      </Modal>
    </div>
    
  )
}

export default BasicModal