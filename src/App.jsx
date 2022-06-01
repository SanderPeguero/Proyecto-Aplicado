import React from 'react'
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom"
import Navbar from './Components/Navbar/Navbar'
import Store from './Components/Store/Store'
import Chat from './Components/Chat/Chat'
import Login from './Components/Login/Login'
import Home from './Components/Home/Home.jsx'
import ModalLogIn from './Components/Modal/ModalLogin.jsx'
import ModalSigIn from './Components/Modal/ModalSigIn.jsx'

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

  const [openSignIn, setOpenSignIn] = React.useState(false);
  const [openLogIn, setOpenLogIn] = React.useState(false);

  return (
    <>
      <Router>
        <header>
          <Navbar setOpenLogin={setOpenLogIn} setOpenSignIn={setOpenSignIn} />
          <ModalSigIn open={openSignIn} setOpen={setOpenSignIn} />
          <ModalLogIn open={openLogIn} setOpen={setOpenLogIn} />

        </header>
        <main style={{ margin: '0', overflow: 'hidden' }}>

          <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/store' element={<Store />}></Route>
            <Route exact path='/chat' element={<Chat />}></Route>
            {/* <Route exact path='/Login' element={<Home/>}></Route> */}
          </Routes>
        </main>
      </Router>
    </>
  )
}

export default App
