import React from 'react';
import { Provider } from 'react-redux'

import store from './store/index'

import Catalog from './views/Catalog'
import Cart from './views/Cart'
import GlobalStyle from './styles/global'

function App() {
  return (
    <Provider store={store}>
     <Catalog />
     <Cart/>
     <GlobalStyle/>
    </Provider>
  );
}

export default App;
