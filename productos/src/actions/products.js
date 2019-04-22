export const SET_PRODUCTS = "SET_PRODUCTS"

const setProducts = payload => ({type: SET_PRODUCTS, payload});

export const setFetchProducts = products => dispatch => {
    dispatch(setProducts(products))
}