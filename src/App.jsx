import {HashRouter as Router, Routes, Route, Link}   from "react-router-dom"
import Navbar from './Components/Navbar/Navbar'
import Store from './Components/Store/Store'
import Chat from './Components/Chat/Chat'
import Login from './Components/Login/Login'

function App() {

  return (
    <>
    <Router>
      <header>
        <Navbar/>
      </header>
      <main style={{margin: '0', overflow: 'hidden'}}>

        <Routes>
          <Route exact path='/' element={<Store/>}></Route>
          <Route exact path='/store' element={<Store/>}></Route>
          <Route exact path='/chat' element={<Chat/>}></Route>
          <Route exact path='/Login' element={<Login/>}></Route>
        </Routes>
      </main>
    </Router>
    </>
  )
}

export default App
