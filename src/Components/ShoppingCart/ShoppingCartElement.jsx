import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styles from './ShoppingCart.module.css'

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
              <Box className={styles.select}>
                <FormControl size="small">
                  <InputLabel id="demo-simple-select-label">Cant</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={cant}
                    label="Cant"
                    onChange={handleChange}
                    className={styles.select}
                    size = "small"
                  >
                    
                    <MenuItem value = {1}>1</MenuItem>
                    <MenuItem value = {2}>2</MenuItem>
                    <MenuItem value = {3}>3</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                Remove
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              $19
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
