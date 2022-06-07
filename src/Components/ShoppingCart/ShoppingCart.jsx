import React from "react";

function ShoppingCart({ItemCount}) {

  return (
    <div style={{ color: "black" }}>
      <h2>
        Tiene {ItemCount} articulos en el carrito
      </h2>
    </div>
  );
}

export default ShoppingCart