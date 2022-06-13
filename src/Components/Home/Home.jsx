import GatoDeLado from '../../Images/GatoExcentrico.png'



const Home = () => {
    return (
        <div style={{background: 'black'}}>
            <img src={GatoDeLado} style={{ height: '85rem', marginTop: '-12rem', marginLeft: '6rem'}} />
            
            <div style={{
                position: 'absolute',
                top: '45%',
                left: '25%',
                margin: '5rem',
                transform: 'translate(-50%, -50%)',
                color: 'white'
            }}>
                <div style={{
                    fontSize: '50px',
                    fontWeight: '700',
                    fontFamily: 'sans-serif'
                }}>Bienvenido a</div>
                <div style={{
                    fontSize: '60px',
                    fontWeight: '700',
                    fontFamily: 'sans-serif'
                }}>Quantum Swap</div>
                <div style={{
                    fontSize: '16px',
                    fontFamily: 'Poppins',
                    fontWeight: '400',
                    marginTop: '0.5rem',
                    marginLeft: '0.5rem'
                }}>La tienda descentralizada mas completa de la web <br/> Quantum Swap te permite comprar y vender articulos usando
                 <br /> cripto monedas.</div>
            </div>
        </div>

    )
}

export default Home