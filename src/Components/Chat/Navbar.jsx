import * as React from 'react';
// import './css/Re'
export default function AccountMenu(props) {
    return (
        <div className='navbarmenu' >
            <h5 style={{marginLeft:'1.125vw',color:'white',font:'Noto Sans',fontWeight:'500',fontStyle:'normal',fontSize:'17px',letterSpacing:'-0.035em'}}>{props.roomid}</h5>
        </div>
    );
}
