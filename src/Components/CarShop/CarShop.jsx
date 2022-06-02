import React from "react";
import ButtonGroup from '@mui/material/ButtonGroup';
import Badge from '@mui/material/Badge';
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartCheckoutRounded';

function CarShop({itemCount, setItemCount}) {
  //const [itemCount, setItemCount] = React.useState(0);

  return (
    <div style={{ color: "black" }}>
      {/* <h4>How to create ShoppingCart Button in ReactJS?</h4> */}
      <div>
        <ButtonGroup>
          <Button
            onClick={() => {
              setItemCount(Math.max(itemCount - 1, 0));
            }}
          >
            {" "}
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
      </div>
    </div>
  );
}

export default CarShop