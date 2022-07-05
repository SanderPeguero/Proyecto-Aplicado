import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import ButtonGroup from '@mui/material/ButtonGroup';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function ComplexGrid({ product, setProductPayment, ProductPayment }) {

  const handleChange = (event) => {
    setCant(event.target.value);
  };

  const [itemCount, setItemCount] = useState(1);
  const [Total, setTotal] = useState(0);

  // function calc(){

  //   setTotal(itemCount * product.Precio)
  //   setProductPayment(Total)

  // }
  
  // const oldtotal = ProductPayment;
  // const newtotal = (itemCount * product.Precio) + oldtotal

  // useEffect(() => {

  //   setProductPayment(Total)
    
    
  // }, [itemCount]);





  return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 400,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt={product.imageAlt} src={product.Image} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {product.Description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: {product.ProductId}
              </Typography>
            </Grid>

            <Grid item>
              <Box >
                <ButtonGroup size='small'>
                  <Button
                    onClick={() => {

                      setItemCount(Math.max(itemCount - 1, 0));


                    }}
                    disabled = {itemCount <= 0 && true}
                  >


                    <RemoveIcon fontSize="small" />
                  </Button>
                  <Button key={product.IDProducto}>
                    {itemCount}
                  </Button>
                  <Button
                    onClick={() => {

                      setItemCount(itemCount + 1);
                    }}
                    disabled={itemCount == product.CantidadRestante && true}
                    >
                    {" "}
                    <AddIcon fontSize="small" />
                  </Button>
                </ButtonGroup>
              </Box>
            </Grid>
            
            <Grid item>
              <Button sx={{ cursor: 'pointer' }} variant="body2" >
                Remove
              </Button>
            </Grid>
          </Grid>
          <Grid item>

          </Grid>
          <Grid item>
            <Typography variant="body2" component="div"  >
              <br />
              {product.Descuento == 0 && <div>${ProductPayment}</div>}
              <br />
              {product.Descuento > 0 && <div style={{ textDecoration: 'line-through' }}>${product.Precio * itemCount}</div>}
              <br />
              {product.Descuento > 0 &&
                <div style={{ color: 'red' }}>
                  ${ (product.Precio - ((product.Descuento / 100) * product.Precio)) * itemCount}
                </div>
              }
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>

  );
}

