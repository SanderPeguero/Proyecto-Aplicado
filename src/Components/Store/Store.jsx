import Navbar from '../Navbar/Navbar'
import Card from '../Card/Card'
import styles from './Store.module.css'
import { useState, useEffect } from 'react';
import { useQuery } from '../../Hooks/useQuery';

const Store = ({ shoppingCart, products }) => {

  const [Product, setProduct] = useState(null);
  const query = useQuery();
  const search = query.get("search");

  useEffect(() => {  
      
    if(search != null){

      setProduct(products.filter((d) => d.shortdescription.toLowerCase().includes(search)))

    }else{

      setProduct(null)

    }

  }, [search]);

  return (
    <ul className={styles.ul}>
      {Product == null ? 
          products.map((product) => {
            return (
              <li key={product.id} className={styles.li}>
                <Card shoppingCart={shoppingCart} product={product}/>
              </li>
            )
          })
        :
          Product.map((product) => {
            return (
              <li key={product.id} className={styles.li}>
                <Card shoppingCart={shoppingCart} product={product}/>
              </li>
            )
          })
      }
    </ul>
  )
      
}
      
export default Store
      