import { ActionTypes } from '../constants/ActionTypes'
//for all products
export const setProducts = (products) => {
	return {
		type: ActionTypes.SET_PRODUCTS,
		payload: products,
	}
}
//
//for product details page
export const selectedProduct = (data) => {
	return {
		type: ActionTypes.SELECTED_PRODUCT,
		payload: data,
	}
}

export const removeSelectedProduct = () => {
	return {
		type: ActionTypes.REMOVE_SELECTED_PRODUCT,
	}
}
//
//for navbar categories
export const filterByCategories = (categories) => {
	return {
		type: ActionTypes.FILTER_BY_CATEGORIES,
		payload: categories,
	}
}

//for setting product page titles
export const setProductHeader = (productHeaderTitles) => {
	return {
		type: ActionTypes.SET_PRODUCT_HEADER,
		payload: productHeaderTitles,
	}
}

export const removeProductHeader = () => {
	return {
		type: ActionTypes.REMOVE_PRODUCT_HEADER,
	}
}

export const filterTrending = (type) => {
	return {
		type: ActionTypes.FILTER_TRENDING,
		payload: type,
	}
}
