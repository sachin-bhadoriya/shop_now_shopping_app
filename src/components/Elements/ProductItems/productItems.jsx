import React, { useContext } from 'react'
import Card from '../Card'
import { productItemsDetails } from '../../../assets/data'
import { CartContext } from '../../../context/CartContext';

const ProductItems = () => {
        const { addToCart } = useContext(CartContext);

  return (
    <div style={{ display: "flex", overflow: "auto" }}>
      {
        productItemsDetails.map((i, index) => (
          <Card key={index} companyName={i.companyName} productTitle={i.productTitle} productRating={i.productRating} cancelPriceProduct={i.cancelPriceProduct} activePriceProduct={i.activePriceProduct} cartBtnClick={() => addToCart(i)} />
        ))
      }
    </div>
  )
}

export default ProductItems