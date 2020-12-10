import { all, takeLatest, select, call, put } from 'redux-saga/effects';
import { IState } from '../..';
import { addProductToCartFailure, addProductToCartRequest, addProductToCartSuccess } from './action'
import api from '../../../services/api'
import { AxiosResponse } from 'axios';

type CheckProductRequest = ReturnType<typeof addProductToCartRequest>;

interface IStockeResponse{
  id: number;
  quantity: number;
}

function* checkProductStock({payload}: CheckProductRequest) {
  const { product } = payload;

  const currentQuantity: number = yield select((state: IState) => {
    return state.cart.items.find(item => item.product.id === product.id)?.quantity ?? 0;
  })

  const availableStockResponse: AxiosResponse<IStockeResponse> = yield call(api.get, `stock/${product.id}`)

  if(availableStockResponse.data.quantity > currentQuantity) {
    yield put(addProductToCartSuccess(product))
  } else {
    yield put(addProductToCartFailure(product.id))

  }


}

export default all([
  takeLatest('ADD_PRODUCT_TO_CART_REQUEST', checkProductStock)
])