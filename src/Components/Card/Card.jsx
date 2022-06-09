import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import Camera from '../../Images/Camera.jpg'
import ShoppingCartCheckoutRoundedIcon from '@mui/icons-material/ShoppingCartCheckoutRounded';
import ShoppingCart from '../ShoppingCart/ShoppingCart.jsx'
import ButtonGroup from '@mui/material/ButtonGroup';
import Badge from '@mui/material/Badge';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

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

export default function RecipeReviewCard({ setOpenCarShoppping, ItemCount, setItemCount, product }) {
  const [expanded, setExpanded] = React.useState(false);
  const handleOpenCarShop = () => setOpenCarShoppping(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }} style={{
      background: 'black',
      color: 'rgb(255 255 255 / 87%)',
      overflow: 'hidden'
    }}>
      <CardHeader
        style={{ color: 'white' }}
        avatar={
          <Avatar sx={{ bgcolor: '#ffffff' }} aria-label="recipe" style={{ color: 'black' }}>

          </Avatar>
        }
        action={
          <IconButton aria-label="settings" style={{ color: 'white' }}>
            <MoreVertIcon />
          </IconButton>
        }
        title={product.name}
        color='white'

      />
      <CardMedia
        component="img"
        height="250"
        image={Camera}
        alt="Paella dish"
      />
      <CardContent >
        <Typography variant="body2" color="#ffffff">
          {product.shortdescription}
        </Typography>
      </CardContent>
      <CardActions disableSpacing >
        <Button variant="contained" style={{ backgroundColor: '#00a9d1', color: 'black' }}>
          Comprar
        </Button>
       
        <ButtonGroup>
          <Button
            style={{marginLeft: '1rem'}}
            onClick={() => {
              setItemCount(Math.max(ItemCount - 1, 0));
            }}
          >
            {" "}
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            onClick={() => {
              setItemCount(ItemCount + 1);
            }}
          >
            {" "}
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
}