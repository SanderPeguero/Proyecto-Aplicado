import {HashRouter as Router, Routes, Route, Link}   from "react-router-dom"
import Navbar from './Components/Navbar/Navbar'
import Store from './Components/Store/Store'
import Chat from './Components/Chat/Chat'

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
          <Route exact part='/chat' element={<Chat></Chat>}></Route>
        </Routes>
      </main>
    </Router>
    </>
  )
}

export default App
