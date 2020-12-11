import React, {useEffect, useState } from 'react';

import { IProduct } from '../../store/modules/cart/types';
import api from '../../services/api';
import CatalogItem from '../CatalogItem/CatalogItem'
import Header from '../../Components/Header'
import BackgroundIMG from '../../assets/background_img.jpg'

import {Container} from './style'

const Catalog: React.FC = () => {

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

  return (
    <>
    <main >
      <Header  title="Lojinha Maneira"/>
        
      {catalog.map(product => (
        <CatalogItem key={product.id} product={product}/>
        ))}
    </main>
  </>
  )
}

export default Catalog;