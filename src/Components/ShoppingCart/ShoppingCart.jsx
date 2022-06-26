import React from "react";
import ShoppingCartElement from './ShoppingCartElement.jsx'
import styles from './ShoppingCart.module.css'
import Alert from '@mui/material/Alert';

function ShoppingCart({ shoppingCart, setShoppingCart }) {
  // const array = []

  // array.


  return (
    <div className={styles.scroll}>
      <h2>
        Tiene {shoppingCart.length} articulos en el carrito
      </h2>
      {shoppingCart.map((product) => <ShoppingCartElement key={Math.random() * (1 - 1000)} product={product} />)}
      <div className={styles.payment}>
        <div>
          Full payment: $
        </div>

      </div>
    </div>
  );
}

export default ShoppingCart