import ImgProducto from '../../Images/Camera.jpg'



const InfoProducto = () => {
    return (
        <>
            <img src={ImgProducto} style={{ height: '100%', width: '100%' }} />
            
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '27%',
                transform: 'translate(-50%, -50%)',
                color: 'black'
            }}>
                <div style={{
                    fontSize: '60px',
                    fontWeight: '700',
                    fontFamily: 'sans-serif'
                }}></div>
                <div style={{
                    fontSize: '16px',
                    fontFamily: 'Poppins',
                    fontWeight: '400',
                    marginTop: '0.5rem',
                    marginLeft: '0.5rem'
                }}>Whether you are new to crypto or you are a DeFi veteran, ApeSwap has the tools,
                    <br /> community, and connections to support your decentralized finance needs.</div>
            </div>
        </>

    )
}

export default InfoProducto