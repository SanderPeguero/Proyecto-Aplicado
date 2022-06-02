import './App.css';
import Chat from './Chat'
import { useEffect, useState} from 'react';
import { Login } from './Login';
import { Room } from './Room';
import { Leftbar } from './Leftbar';

function App() {
  const [user, setUser] = useState(null)
  const [room, setroom] = useState(null)
  useEffect(() => {
    if(localStorage.getItem('user')){
      setUser(JSON.parse(localStorage.getItem('user')))
    }
    if(localStorage.getItem('room')){
      setroom(localStorage.getItem('room'))
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
    <div className="App">
      {
        (!user) ?
          (<Login getuser={setgetuser} />) :
          (room ? (<div className="app__cont">
            <Leftbar photo={user.photoURL} logout={handlelogout} name={user.displayName} roomid={room} switchroom={roomswitch} />
            <Chat photo={user.photoURL} logout={handlelogout} name={user.displayName} roomid={room} switchroom={roomswitch} a />
          </div>) : <Room roomfunc={roomfunc} photo={user.photoURL} name={user.displayName} />
          )
      }
    </div>
  )
}

export default App;
