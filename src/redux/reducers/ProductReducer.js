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
		//
		case ActionTypes.USER_SELECTED_PRODUCTS:
			const { sort, category, rating } = action.payload
			//utility function for sorting
			const sortUtility = (ArrayToSort, key) => _.sortBy(ArrayToSort, key.toLowerCase())

			let sortedItems = []
			let tempState = []
			tempState = JSON.parse(JSON.stringify(state.products))
			if ((sort.length !== 0) & (category.length !== 0)) {
				// tempState = JSON.parse(JSON.stringify(state.products))
				const filteredItems = tempState.filter((p) => p.category === category)
				//
				if (sort === 'asc') {
					sortedItems = sortUtility(filteredItems, 'price')
				} else if (sort === 'desc') {
					sortedItems = sortUtility(filteredItems, 'price').reverse()
				} else if (sort === 'a-z') {
					sortedItems = sortUtility(filteredItems, 'title')
				} else if (sort === 'z-a') {
					sortedItems = sortUtility(filteredItems, 'title').reverse()
				}
				//
			} else if ((sort.length !== 0) & (category.length === 0)) {
				// tempState = JSON.parse(JSON.stringify(state.products))
				if (sort === 'asc') {
					sortedItems = sortUtility(tempState, 'price')
				} else if (sort === 'desc') {
					sortedItems = sortUtility(tempState, 'price').reverse()
				} else if (sort === 'a-z') {
					sortedItems = sortUtility(tempState, 'title')
				} else if (sort === 'z-a') {
					sortedItems = sortUtility(tempState, 'title').reverse()
				}
				//
			} else if ((sort.length === 0) & (category.length !== 0)) {
				// tempState = JSON.parse(JSON.stringify(state.products))
				sortedItems = tempState.filter((p) => p.category === category)
				console.log('sort == 0 and category != 0 sortedItems', sortedItems)
				//
			} else if ((sort === '') & (category.length === '') & (rating.length === '')) {
				sortedItems = []
			}
			return { ...state, sortedProducts: sortedItems }
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

// export const userSelectedProductReducer = (state = initialState, action) => {
// 	switch (action.type) {
// 		case ActionTypes.USER_SELECTED_PRODUCTS:
// 			console.log('userSelectedProductReducer State:', state)
// 			console.log('userSelectedProductReducer Payload:', action.payload)
// 			return { ...state, userSelectedProducts: action.payload }
// 		default:
// 			return state
// 	}
// }
