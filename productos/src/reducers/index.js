import { combineReducers } from 'redux'
import { createSelector } from 'reselect'
import { products } from './products'

export default combineReducers({
    products
})

export const getProducts = createSelector(state => state.products, products => products)