import Navbar from './Components/Navbar/Navbar'
import Store from './Components/Store/Store'
import {HashRouter as Router, Routes, Route, Link}   from "react-router-dom"


function App() {

  return (
    <>
    <Router>
      <header>
        <Navbar/>
      </header>
      <main style={{margin: '0', overflow: 'hidden'}}>

        <Routes>
          <Route exact path='/store' element={<Store/>}></Route>
        </Routes>
      </main>
    </Router>
    </>
  )
}

export default App
