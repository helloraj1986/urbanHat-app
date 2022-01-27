import _ from 'lodash'
import { ActionTypes } from '../constants/ActionTypes'

const initialState = {
	products: [],
	product: {},
	categoriesToBeDisplayed: [],
	productHeaders: {},
	trendingItems: [],
	sortedProducts: [],
}

// export const ProductReducer = (state = initialState, action) => {
// 	switch (action.type) {
// 		case ActionTypes.SET_PRODUCTS:
// 			return { ...state, products: action.payload }
// 		//
// 		case ActionTypes.USER_SELECTED_PRODUCTS:
// 			const { sort, category } = action.payload
// 			let sortedItems = []
// 			if ((sort.length !== 0) & (category.length !== 0)) {
// 				const filteredItems = state.products.filter((p) => p.category === category)
// 				if (sort === 'desc') {
// 					sortedItems = filteredItems.sort(
// 						(a, b) => parseFloat(b.price) - parseFloat(a.price),
// 					)
// 				} else if (sort === 'asc') {
// 					sortedItems = filteredItems.sort(
// 						(a, b) => parseFloat(a.price) - parseFloat(b.price),
// 					)
//
// 			} else if ((sort.length !== 0) & (category.length === 0)) {
// 				if (sort === 'desc') {
// 					state.products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
// 				} else if (sort === 'asc') {
// 					state.products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
// 				}
// 			} else if ((sort.length === 0) & (category.length !== 0)) {
// 				sortedItems = state.products.filter((p) => p.category === category)
// 			}

// 			return { ...state, sortedProducts: sortedItems }
// 		default:
// 			return state
// 	}
// }
///////////////
export const ProductReducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.SET_PRODUCTS:
			return { ...state, products: action.payload }
		case ActionTypes.USER_SELECTED_PRODUCTS:
			const { sort, category, rating } = action.payload
			let tempState = Object.assign({}, state.products)
			console.log('userSelectedProductReducer State:', state.products)
			let sortedItems = tempState
			if ((sort === '') & (category === '') & (rating === '')) {
				sortedItems = []
			}
			if ((rating !== '') & (category === '') & (sort === '')) {
				sortedItems = state.products.filter((item) => item.rating.rate >= rating)
			}
			if ((category !== '') & (rating === '') & (sort === '')) {
				sortedItems = state.products.filter((item) => item.category === category)
			}
			if ((sort !== '') & (rating === '') & (category === '')) {
				sortedItems = state
			}
			if ((category !== '') & (rating !== '')) {
				let filterdItems = state.products.filter((item) => item.category === category)
				sortedItems = filterdItems
					? filterdItems.filter((item) => item.rating.rate >= rating)
					: state.products.filter((item) => item.rating.rate >= rating)
			}
			return { ...state, userSelectedProducts: sortedItems }
		default:
			return state
	}
}

export const SelectedProductReducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.SELECTED_PRODUCT:
			return { ...state, product: action.payload }
		case ActionTypes.REMOVE_SELECTED_PRODUCT:
			return {}
		default:
			return state
	}
}

export const filterCategoriesReducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.FILTER_BY_CATEGORIES:
			return { ...state, categoriesToBeDisplayed: action.payload }
		default:
			return state
	}
}

export const productHeaderReducer = (state = {}, action) => {
	switch (action.type) {
		case ActionTypes.SET_PRODUCT_HEADER:
			return { ...state, productHeaders: action.payload }
		case ActionTypes.REMOVE_PRODUCT_HEADER:
			return {}
		default:
			return state
	}
}

export const filterTrendingReducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.FILTER_TRENDING:
			let items = []
			if (!action.payload.category) {
				items = action.payload.products.filter((a) => a.category === "men's clothing")
			} else {
				items = action.payload.products.filter(
					(a) => a.category === action.payload.category,
				)
			}
			return { ...state, trendingItems: items }
		default:
			return state
	}
}
