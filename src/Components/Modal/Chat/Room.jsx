import { Avatar, Button, Input } from '@mui/material'
import React, { useState } from 'react'
import LoginIcon from '@mui/icons-material/Login';
export const Room = (props) => {
    const [roomid,setRoomid]=useState("")
    function handleRoomID(){
        props.roomfunc(roomid)
    }
    function handleGenerate(){
        const random=new Date().getHours().toString()+new Date().getMinutes().toString()+new Date().getSeconds().toString()+props.name.slice(0,Math.floor(Math.random()*4))+props.photo.slice(9,18).toString()
        setRoomid(random)
    }
  return (
    <div style={{
      display:'flex',
      flexDirection:'column',
      rowGap:'21px',
      alignItems:'center',
      backgroundColor:'#252329',
      padding:'43px 56px',
      borderRadius:'8px',
      width:'422px'
    }}>
        <div className="usernameandall" style={{marginLeft: '1.5rem'}}>
        <Avatar sx={{width:'115px',height:'115px'}} alt={props.name} src={props.photo} />
        <h2 style={{margin:'auto',marginTop:'20px',color:'white',fontFamily:'sans-serif',marginBottom:'10px',fontWeight:'400'}}>{props.name}</h2>
        </div>
        <Input  placeholder="Enter a room Id" sx={{width:'280px',color:'white'}} value={roomid}
          onChange={(e)=>{setRoomid(e.target.value)}} />
        <Button sx={{fontWeight:'bold'}} onClick={()=>{handleGenerate()}}>Generate one</Button>
        {
            roomid?(<Button onClick={()=>{handleRoomID()}} sx={{width:"179px",margin:'auto',fontWeight:'bold'}} variant="outlined">Join Room <LoginIcon style={{marginLeft:'9px',width:'25px',height:'24px'}}></LoginIcon></Button>):(<Button disabled sx={{width:"179px",margin:'auto',fontWeight:'bold'}} variant="outlined">Join Room <LoginIcon style={{marginLeft:'9px',width:'25px',height:'24px'}}></LoginIcon></Button>)
        }
       
    </div>
  )
}
