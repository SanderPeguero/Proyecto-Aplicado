import './App.css';
import Chat from './Chat'
import { useEffect, useState} from 'react';
import { Login } from './Login';
import { Room } from './Room';
import { Leftbar } from './Leftbar';

function App() {
  
  const [user, setUser] = useState(localStorage.getItem("UserName"))
  const [room, setroom] = useState(localStorage.getItem("UserName"))

  useEffect(() => {
    if(localStorage.getItem('UserName')){
      // setUser(JSON.parse(localStorage.getItem('UserName')))
      setUser(localStorage.getItem("UserName"))
      // localStorage.setItem('user',JSON.stringify(localStorage.getItem("UserName")))
    }
    if(localStorage.getItem('UserName')){
      setroom(localStorage.getItem('UserName'))
    }
  }, [])

  function setgetuser(e) {
    setUser(e)
    localStorage.setItem('user',JSON.stringify(e))
  }

  function handlelogout() {
    setUser(null)
    setroom(null)
    localStorage.removeItem('user')
    localStorage.removeItem('room')
  }

  function roomfunc(e) {
    setroom(e)
    localStorage.setItem('room',e)
  }

  function roomswitch(){
    setroom(null)
    localStorage.removeItem('room')
  }

  return (
    <div className="App" style={{ boxShadow: 'none', height: '30rem', marginRight: '0', marginBottom: '10px', background: '#252329' }}>
      {
        (!user) ?
          (<Login getuser={setgetuser} />) :
          (room ? (<div className="app__cont" style={{ boxShadow: 'none', marginBottom: '10px', background: '#252329' }}>
            {/* <Leftbar photo={user.photoURL} logout={handlelogout} name={user.displayName} roomid={room} switchroom={roomswitch} /> */}
            <Chat photo={user.photoURL} logout={handlelogout} name={user} roomid={room} switchroom={roomswitch} style={{ marginBottom: '10px'}} />
          </div>) : <Room roomfunc={roomfunc} photo={user.photoURL} name={user.displayName} />
          )
      }
    </div>
  )
}

export default App;
