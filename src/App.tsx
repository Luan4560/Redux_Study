import React from 'react';
import { Provider } from 'react-redux'

import store from './store/index'

import Catalog from './Components/Catalog'
import Cart from './Components/Cart'

function App() {
  return (
    <Provider store={store}>
     <Catalog />
     <Cart/>
    </Provider>
  );
}

export default App;
