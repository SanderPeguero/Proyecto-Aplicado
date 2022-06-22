import GatoDeLado from '../../Images/blanco.png'
import styles from './Home.module.css'


const Home = () => {
    return (
        <div style={{background: 'black'}}>
            {/* <img src={GatoDeLado} style={{ height: '75rem', marginTop: '0rem', marginLeft: '0rem'}} /> */}
            <div className={styles.background}></div>
            
            <div style={{
                position: 'absolute',
                top: '45%',
                left: '25%',
                margin: '5rem',
                transform: 'translate(-50%, -50%)',
                color: 'black'
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