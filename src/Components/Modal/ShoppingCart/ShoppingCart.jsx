import React, { useState } from 'react';
import ShoppingCartElement from './ShoppingCartElement.jsx'
import styles from './ShoppingCart.module.css'
import Alert from '@mui/material/Alert';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { indigo } from '@mui/material/colors';



function ShoppingCart({ shoppingCart, setShoppingCart , FullPayment,setFullPayment}) {

  const [ProductPayment, setProductPayment] = useState(0);
  // const [FullPayment, setFullPayment] = useState(0);

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(indigo[800]),
    backgroundColor: indigo[800],
    '&:hover': {
      backgroundColor: indigo[700],
    },
  }))

  return (
    <div className={styles.scroll}>
      <h2>
        Tiene {shoppingCart.length} articulos en el carrito
      </h2>
      {shoppingCart.map((product) =>{ return <ShoppingCartElement key={Math.random() * (1 - 1000)} product={product} FullPayment={FullPayment} setFullPayment={setFullPayment} /> } ) }
      <div className={styles.payment}  key={Math.random() * (1 - 1000)}>
          <br/>
          <ColorButton variant="outlined"  style={{marginRight: '1rem' }}>
            Comprar ({shoppingCart.length})
          </ColorButton>
          Full payment: $ { shoppingCart.length}
      </div>
    </div>
  );
}

export default ShoppingCart