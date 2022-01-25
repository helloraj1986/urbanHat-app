import { ActionTypes } from '../constants/ActionTypes'

const initialState = {
	products: [],
	product: {},
	categoriesToBeDisplayed: [],
	productHeaders: {},
	trendingItems: [],
}

export const ProductReducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.SET_PRODUCTS:
			return { ...state, products: action.payload }
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
