import React, { useState } from 'react';
import ShoppingCartElement from './ShoppingCartElement.jsx'
import styles from './ShoppingCart.module.css'
import Alert from '@mui/material/Alert';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { indigo } from '@mui/material/colors';
import axios from 'axios'
import UrlApi from '../../../globals'
import { useEffect } from 'react';


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
  
  const handleSubmit = (event) => {

    let UserId = localStorage.getItem('UserId')
    let ShoppingCartProducts = shoppingCart.map((product) => { return { ProductId: product.ProductId, Quantity: 1 } })

    event.preventDefault();

    let objData = {
        UserId: UserId,
        ShoppingCartProducts: ShoppingCartProducts
    };

    console.log(objData)

    axios.put(UrlApi + '/shoppingcarts', objData)
    .then((response) => {
      console.log(response.data)
      if (response.data.Executed && response.data.ProductsFounded && response.data.ShoppingCartInserted && response.data.ShoppingCartProductsInserted) {
        swal({
          title: "Successfull!",
          text: "Enjoy Quantum Swap ;)",
          icon: "success",
          button: "Aww yiss!"
        });
      } else if (response.data.ProductsFounded != null && !response.data.ProductsFounded) {
        swal({
          title: "Not Saved!",
          text: "Products Not Found!",
          icon: "error",
          button: "Try again :("
        });
      } else if (response.data.ShoppingCartInserted != null && !response.data.ShoppingCartInserted) {
        swal({
          title: "Not Saved!",
          text: "Shopping Cart Not Saved!",
          icon: "error",
          button: "Try again :("
        });
      } else if (response.data.ShoppingCartProductsInserted != null && !response.data.ShoppingCartProductsInserted) {
        swal({
          title: "Not Saved!",
          text: "Any Shopping Cart Product Isn’t Saved!",
          icon: "error",
          button: "Try again :("
        });
      } else if (!response.data.Executed) {
        swal({
          title: "Not Saved!",
          text: "Internal Server Error!",
          icon: "error",
          button: "Try again :("
        });
        console.log(err)
      }
    })
    .catch((err) => {
      swal({
        title: "Not Saved!",
        text: "Server Disconnected!",
        icon: "error",
        button: "Try again :("
      });
      console.log(err)
    })
  };

  
const [TotalProduct, setTotalProduct] = useState([FullPayment])
const [suma, setsuma] = useState()
const [vSumTotal, setVSumTotal] = useState(0);
const [TotalPrecio, setTotalpRECIO] = useState([])





  return (
    <div className={styles.scroll}>
      <h2>
        Tiene {shoppingCart.length} articulos en el carrito
      </h2>
      {shoppingCart.map((product) =>{  return <ShoppingCartElement key={Math.random() * (1 - 1000)} product={product} FullPayment={FullPayment} setFullPayment = {setFullPayment} shoppingCart={shoppingCart} setShoppingCart={setShoppingCart}/>  } ) }
      <div className={styles.payment}  key={Math.random() * (1 - 1000)}>
          <br/>
          <ColorButton variant="outlined"  style={{marginRight: '1rem' }} onClick={handleSubmit}>
            Comprar ({shoppingCart.length})
          </ColorButton>
           {shoppingCart != 0 && TotalProduct.map((PrecioTotal)=> <>Full Payment: ${PrecioTotal.Price}</>)}
           {shoppingCart.length == 0 && <>Full payment: $0</> }
      </div>
    </div>
  );
}

export default ShoppingCart