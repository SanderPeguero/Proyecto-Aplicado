import Navbar from '../Navbar/Navbar'
import Card from '../Card/Card'
import styles from './Store.module.css'


const Store = ({ ItemCount, setItemCount, products }) => {
  return (
    <ul className={styles.ul}>
      {
        products.map((product) => {
          return (
            <li key={product.id} className={styles.li}>
              <Card ItemCount={ItemCount} setItemCount={setItemCount} product={product}/>
            </li>
          )
        })
      }
    </ul>
    // <div style={{color: 'black'}}>
    //   {/* Productos Mapeo */}
    //   {
    //     products.map((product) => {
    //      return <div>Name: {product.name}</div>
    //     })
    //   }
    // </div>
  )

}

export default Store
