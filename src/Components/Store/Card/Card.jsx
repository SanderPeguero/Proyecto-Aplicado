import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import styles from "./card.module.css";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { indigo } from '@mui/material/colors';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({ setOpenCarShoppping, shoppingCart, product }) {
  const [expanded, setExpanded] = React.useState(false);
  const handleOpenCarShop = () => setOpenCarShoppping(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(indigo[800]),
    backgroundColor: indigo[800],
    '&:hover': {
      backgroundColor: indigo[700],
    },
  }));


  return (
    <Card sx={{ maxWidth: 345 }} style={{
      background: 'black',
      color: 'rgb(255 255 255 / 87%)',
      overflow: 'hidden'
    }} className={styles.card}>
      <div className={styles.name}
        style={{ color: 'white', fontSize: '1.2rem', padding: '16px' }}
      >
        {product.Descripcion}
        
      </div>
      <CardMedia
        component="img"
        height="250"
        image={product.QRCode}
        alt={product.imageAlt}
      />
      <CardContent >
        <Typography variant="body2" color="#ffffff">
          {product.shortdescription}
        </Typography>
        <Typography>
         ${product.Precio} 
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={styles.cardActions}>
        <Link to={"/infoProducto?search=" + product.IDProducto}>
          <ColorButton variant="outlined"  className={styles.ButtonCompra}>
            Comprar
          </ColorButton>
        </Link>
       

       
 
          <ColorButton variant="outlined"  style={{marginLeft: '1rem' }} 
            onClick={() => {shoppingCart.push(product)}}
          >
            {"   "}
             Add    <AddShoppingCartIcon fontSize="small" style={{marginLeft: '0.50rem'}}/>
          </ColorButton>
        
      </CardActions>
    </Card>
  );
}