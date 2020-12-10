import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../store/modules/cart/action';
import { IProduct } from '../store/modules/cart/types';

interface ICatalogItemProps {
product: IProduct
}


const CatalogItem: React.FC<ICatalogItemProps> = ({product}) => {
  const dispatch = useDispatch()

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCart(product))
  }, [dispatch, product])
  return (
    <article key={product.id}>
       <strong>{product.title}</strong> {" R$ "}
      <span>{product.price}</span> {"  "}

      <button 
      type="button"
      onClick={() => handleAddProductToCart()}
      >
        Comprar
        </button>
     </article>
  )
}

export default CatalogItem;