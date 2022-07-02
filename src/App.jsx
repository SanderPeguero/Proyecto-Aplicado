import { React, useEffect, useState } from 'react'
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom"
import Navbar from './Components/Navbar/Navbar'
import Store from './Components/Store/Store'
import InfoProducto from './Components/Store/InfoProducto/InfoProducto'
import Home from './Components/Home/Home.jsx'
import ModalLogIn from './Components/Modal/ModalLogin.jsx'
import ModalSigIn from './Components/Modal/ModalSigIn.jsx'
import ModalShoppingCart from './Components/Modal/ModalShoppingCart.jsx'
import ModalChat from './Components/Modal/ModalChat.jsx'
import Fab from '@mui/material/Fab'
import ChatIcon from '@mui/icons-material/Chat'
import axios from 'axios'
import Wallet from './Components/Wallet/wallet.jsx'

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

  const [openSignIn, setOpenSignIn] = useState(false)
  const [openLogIn, setOpenLogIn] = useState(false)
  const [ItemCount, setItemCount] = useState(0)
  
  //Chat
  const [openChat, setOpenChat] = useState(false)
  const ChatHandleClose = () => setOpenChat(true)

  //Carrito
  const [openCarShop, setOpenCarShop] = useState(false)
  const [shoppingCart, setShoppingCart ] = useState([])


  const [products, setProduct] = useState([])
  // let products = []

  

  const peticionGet = () => {
    
    axios.get("https://quantumswap.herokuapp.com/productos/")
    
    .then(response => {
    
      // console.log(response.data.Data);
      // products = response.data.Data
      setProduct(response.data.Data)
    
    }).catch(error=>{
    
      console.log(error);
    
    })

  }
  
  useEffect(() =>{
    
    // console.log( products)
    peticionGet();
    // console.log(products)

  },[openChat])
 
  return (
    <>
      <Router>
        <header>
          <Navbar setOpenLogin={setOpenLogIn}
                  setOpenSignIn={setOpenSignIn}
                  setOpenCarShop={setOpenCarShop}
                  setOpenChat={setOpenChat}
                  shoppingCart={shoppingCart}
                  products={products}
          />
          <div onClick={ChatHandleClose} style={{
            width: '90px',
            backgroundPosition: 'top',
            padding: '0px 0px 30px 0px',
            position: 'fixed',
            bottom: '0px',
            right: '0'
          }}>
            <Fab>
              <ChatIcon />
            </Fab>
          </div>
          <ModalSigIn className='ModalSignIn' open={openSignIn} setOpen={setOpenSignIn} />
          <ModalLogIn className='ModalLogIn' open={openLogIn} setOpen={setOpenLogIn} />
          <ModalShoppingCart className='ModalShoppingCart' open={openCarShop} setOpen={setOpenCarShop} shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />
          <ModalChat className='ModalChat' open={openChat} setOpen={setOpenChat} style={{margin: '0'}} />
          
          

        </header>
        <main style={{ margin: '0', overflow: 'hidden' }}>

          <Routes>
          
            <Route exact path='/' element={<Home className='HomeElement' />}></Route>
            <Route exact path='/store' element={<Store className='StoreElement' shoppingCart={shoppingCart} setItemCount={setItemCount} products={products} />}></Route>
            <Route exact path='/Login' element={<Home className='HomeElement' />}></Route>
            <Route exact path='/wallet' element={<Wallet/>}></Route>
            <Route exact path='/InfoProducto' element={<InfoProducto products={ products } />}></Route>

          </Routes>
        </main>
      </Router>
    </>
  )
}

export default App