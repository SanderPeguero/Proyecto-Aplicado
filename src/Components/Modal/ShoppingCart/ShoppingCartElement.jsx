import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

import ButtonGroup from '@mui/material/ButtonGroup';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styles from './ShoppingCart.module.css'
import { Button } from '@mui/material';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});



export default function ComplexGrid({ product }) {

  const [cant, setCant] = React.useState(0);

  const handleChange = (event) => {
    setCant(event.target.value);
  };


  const [itemCount, setItemCount] = React.useState(1);
  const [CantDisp, setCantDisp] = React.useState(1);




  return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt={product.imageAlt} src={product.QRCode} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {product.Descripcion}
              </Typography>
              {/* <Typography variant="body2" gutterBottom>
                {product.shortdescription}
              </Typography> */}
              <Typography variant="body2" color="text.secondary">
                ID: {product.IDProducto}
              </Typography>
            </Grid>
            <Grid item>
              <Box >
                <ButtonGroup>
                  <Button
                    onClick={() => {
                      setItemCount(Math.max(itemCount - 1, 0));
                    }}
                  >

                    
                    <RemoveIcon fontSize="small" />
                  </Button>
                  <Button
                    onClick={() => {
                      setItemCount(itemCount + 1);
                    }}
                  >
                    {" "}
                    <AddIcon fontSize="small" />
                  </Button>
                </ButtonGroup>
                {/* <FormControl size="small">
                  <InputLabel id="demo-simple-select-label">Cant</InputLabel>


                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={cant}
                    label="Cant"
                    onChange={handleChange}
                    className={styles.select}
                    size="small"
                  >
                    {num.map((num) => <MenuItem value={product.IDProducto} className = {styles.Menu}>

                      {num}

                    </MenuItem>)}
                  </Select>
                </FormControl> */}
              </Box>
            </Grid>
            <Grid item>
              {/* <Button variant='error' onClick={() => {product.delete(product.IDProducto)}}>Remove</Button> */}
              <Typography sx={{ cursor: 'pointer' }} variant="body2" onClick={() => {product.delete(product)}}>
                Remove 
              </Typography>
            </Grid>
          </Grid>
          <Grid item>

          </Grid>
          <Grid item>
            <Typography variant="body2" component="div" style={{}}>
              <br/>
              Precio: ${product.Precio * itemCount}
            </Typography>
            <Typography variant="subtitle1" component="div">Cantidad: {itemCount}</Typography>
            <Typography variant="subtitle1" component="div">Restante: {product.CantidadRestante - itemCount}</Typography>
          </Grid>
        </Grid>
        
      </Grid>
    </Paper>
   
  );
}
