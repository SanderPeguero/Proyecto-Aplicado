import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Chat from '../Chat/App'



const style = {
  // position: 'absolute',
  // top: '40%',
  // left: '50%',
  // transform: 'translate(-50%, -50%)',
  // width: 400,
  // // bgcolor: 'background.paper',
  // // border: '2px solid #000',
  // boxShadow: 24,
  // // p: 4,
 
  // width: '10rem',
  backgroundPosition: 'top',
  padding: '0px 0px 30px 0px',
  position: 'fixed',
  bottom: '0',
  right: '30%',
  float: 'right'

};

const BasicModal = ({ open, setOpen }) => {

  const handleClose = () => setOpen(false);

  return (
    <div style={style}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{ left: '35%', top: '25%' }}
      >
        {/* <Box sx={style} style={{ boxShadow: 'none' }}> */}
        
          <Chat />
        {/* </Box> */}
      </Modal>
    </div>
    
  )
}

export default BasicModal