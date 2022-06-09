import { React, useState } from 'react'
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom"
import Navbar from './Components/Navbar/Navbar'
import Store from './Components/Store/Store'
import InfoProducto from './Components/InfoProducto/InfoProducto'
import Chat from './Components/Chat/App.jsx'
import Home from './Components/Home/Home.jsx'
import ModalLogIn from './Components/Modal/ModalLogin.jsx'
import ModalSigIn from './Components/Modal/ModalSigIn.jsx'
import ModalShoppingCart from './Components/Modal/ModalShoppingCart.jsx'
import ModalChat from './Components/Modal/ModalChat.jsx'
import Fab from '@mui/material/Fab'
import ChatIcon from '@mui/icons-material/Chat';
import Card from './Components/Card/Card.jsx'
import ShoppingCart from './Components/ShoppingCart/ShoppingCart.jsx'

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
}


const App = () => {

  const [openSignIn, setOpenSignIn] = useState(false);
  const [openLogIn, setOpenLogIn] = useState(false);
  const [openCarShop, setOpenCarShop] = useState(false);
  const [openChat, setOpenChat] = useState(false);
  const [ItemCount, setItemCount] = useState(0);

  const handleClose = () => setOpenChat(true);


  return (
    <>
      <Router>
        <header>
          <Navbar setOpenLogin={setOpenLogIn} setOpenSignIn={setOpenSignIn} setOpenCarShop={setOpenCarShop} setOpenChat={setOpenChat} ItemCount = {ItemCount}/>
          <div onClick={handleClose} style={{
            width: '90px',
            backgroundPosition: 'top',
            padding: '0px 0px 30px 0px',
            position: 'fixed',
            bottom: '0px',
            right: '0',
            float: 'right'
          }}>
            <Fab>
              <ChatIcon />
            </Fab>
          </div>
          <ModalSigIn className='ModalSignIn' open={openSignIn} setOpen={setOpenSignIn} />
          <ModalLogIn className='ModalLogIn' open={openLogIn} setOpen={setOpenLogIn} />
          <ModalShoppingCart  className='ModalShoppingCart' open={openCarShop} setOpen={setOpenCarShop} ItemCount={ItemCount} />
          <ModalChat className='ModalChat' open={openChat} setOpen={setOpenChat} style={{margin: '0'}} />
          
          

        </header>
        <main style={{ margin: '0', overflow: 'hidden' }}>

          <Routes>
            <Route exact path='/' element={<Home className='HomeElement' />}></Route>
            <Route exact path='/store' element={<Store className='StoreElement' ItemCount={ItemCount} setItemCount={setItemCount}/>}></Route>
            <Route exact path='/chat' element={<Chat className='ChatElement' style={{marginTop: '5rem'}}/>}></Route>
            <Route exact path='/Login' element={<Home className='HomeElement' />}></Route>
            <Route exact path='/infoProducto' element={<InfoProducto />}></Route>
          </Routes>
        </main>
      </Router>
    </>
  )
}

export default App
//albert