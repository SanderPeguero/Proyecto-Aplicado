import { React, useState } from 'react'
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom"
import Navbar from './Components/Navbar/Navbar'
import Store from './Components/Store/Store'
import Chat from './Components/Chat/App.jsx'
import Home from './Components/Home/Home.jsx'
import ModalLogIn from './Components/Modal/ModalLogin.jsx'
import ModalSigIn from './Components/Modal/ModalSigIn.jsx'
import ModalCraShop from './Components/Modal/ModalCarShop.jsx'
import ModalChat from './Components/Modal/ModalChat.jsx'
import Fab from '@mui/material/Fab'
import ChatIcon from '@mui/icons-material/Chat';
import Card from './Components/Card/Card.jsx'
import Carshop from './Components/CarShop/CarShop.jsx'
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




  return (
    <>
      <Router>
        <header>
          <Navbar setOpenLogin={setOpenLogIn} setOpenSignIn={setOpenSignIn} setOpenCarShop={setOpenCarShop} setOpenChat={setOpenChat} ItemCount = {ItemCount}/>
          <Link to='./chat' style={{
            // display: 'flex',
            // justifyContent: 'end'
            width: '90px',
            backgroundPosition: 'top',
            padding: '0px 0px 30px 0px',
            position: 'fixed',
            bottom: '0px',
            right: '0',
            float: 'right'
          }}>
            <Fab style={{
              // margin: '47rem 2rem',
              // position: 'absolute',
              // zIndex: '1'
            }}>
              <ChatIcon />
            </Fab>
          </Link>
          <ModalSigIn open={openSignIn} setOpen={setOpenSignIn} />
          <ModalLogIn open={openLogIn} setOpen={setOpenLogIn} />
          <ModalCraShop open={openCarShop} setOpen={setOpenCarShop} />
          <ModalChat open={openChat} setOpen={setOpenChat} />
          
          

        </header>
        <main style={{ margin: '0', overflow: 'hidden' }}>

          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/store' element={<Store ItemCount={ItemCount} setItemCount={setItemCount}/>}></Route>
            <Route exact path='/chat' element={<Chat style={{marginTop: '5rem'}}/>}></Route>
            <Route exact path='/Login' element={<Home />}></Route>
          </Routes>
        </main>
      </Router>
    </>
  )
}

export default App
