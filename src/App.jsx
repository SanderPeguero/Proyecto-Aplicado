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

import products from './JSON/Products.json'

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

//JSON con los productos de la tienda
const product = [
  {
    id: '1',
    name: 'Lentes',
    shortdescription: 'Lentes de Sol Negros',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
    imageAlt: 'Lentes de Sol',
    largedescription: 'Una camara canom 530 con lente zoom super optico de 30 lumenes con un obturador de 30cm y una gama de 700 mil millones de colores'
  },
  {
    id: '2',
    name: 'Camara',
    shortdescription: 'Una camara que toma fotos',
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    imageAlt: 'Camara Vintage',
    largedescription: 'Una camara canom 530 con lente zoom super optico de 30 lumenes con un obturador de 30cm y una gama de 700 mil millones de colores'
  }
]


const App = () => {

  const [openSignIn, setOpenSignIn] = useState(false);
  const [openLogIn, setOpenLogIn] = useState(false);
  
  const [ItemCount, setItemCount] = useState(0);
  
  //Chat
  const [openChat, setOpenChat] = useState(false);
  const ChatHandleClose = () => setOpenChat(true);

  //Carrito
  const [openCarShop, setOpenCarShop] = useState(false);
  const [shoppingCart, setShoppingCart ] = useState([])

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
            <Route exact path='/chat' element={<Chat className='ChatElement' style={{marginTop: '5rem'}}/>}></Route>
            <Route exact path='/Login' element={<Home className='HomeElement' />}></Route>
            {/* <Route exact path='/infoProducto' element={<InfoProducto />}></Route> */}
            <Route exact path='/InfoProducto' element={<InfoProducto products={ products } />}></Route>

          </Routes>
        </main>
      </Router>
    </>
  )
}

export default App