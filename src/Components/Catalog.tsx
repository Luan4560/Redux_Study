import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addProductToCart } from '../store/modules/cart/action';
import { IProduct } from '../store/modules/cart/types';
import api from '../services/api';

const Catalog: React.FC = () => {
  const dispatch = useDispatch();

  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    try {
      const getData = async () => {
        await api.get('products').then(response => {
          setCatalog(response.data)
        })
      }
      getData()

    }catch(err) {
      console.log('opa')
    }

  }, [])

  const handleAddProductToCart = useCallback((product: IProduct) => {
    dispatch(addProductToCart(product))
  }, [dispatch])

  return (
  <main>
    <h1>Catalog</h1>

    {catalog.map(product => (
     <article key={product.id}>
       <strong>{product.title}</strong> {" R$ "}
      <span>{product.price}</span> {"  "}

      <button 
      type="button"
      onClick={() => handleAddProductToCart(product)}
      >
        Comprar
        </button>
     </article>
    ))}

  </main>
  )
}

export default Catalog;