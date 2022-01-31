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

export const ProductReducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.SET_PRODUCTS:
			return { ...state, products: action.payload }
		//
		//
		case ActionTypes.USER_SELECTED_PRODUCTS:
			const { sort, category, rating, jacket, short, tb } = action.payload
			let tempState = JSON.parse(JSON.stringify(state.products))
			let sortedItems = tempState
			//utility function for soring as per the item key in the object
			const sortUtility = (ArrayToSort, key) => _.sortBy(ArrayToSort, key.toLowerCase())
			//sorting function whenever sort !== ''
			function sortAsPerUserIntput(keyword, arr) {
				return keyword !== 'desc'
					? keyword !== 'asc'
						? keyword !== 'z-a'
							? sortUtility(arr, 'title')
							: sortUtility(arr, 'title').reverse()
						: sortUtility(arr, 'price')
					: sortUtility(arr, 'price').reverse()
			}

			//
			if ((sort === '') & (category === '') & (rating === '')) {
				sortedItems = []
			}
			if ((rating !== '') & (category === '') & (sort === '')) {
				sortedItems = tempState.filter((item) => item.rating.rate >= rating)
			}
			if ((category !== '') & (rating === '') & (sort === '')) {
				sortedItems = tempState.filter((item) => item.category === category)
			}
			if ((sort !== '') & (rating === '') & (category === '')) {
				sortedItems = sortAsPerUserIntput(sort, tempState)
			}
			if ((category !== '') & (rating !== '') & (sort === '')) {
				let filterdItems = tempState.filter((item) => item.category === category)
				sortedItems = filterdItems.filter((item) => item.rating.rate >= rating)
			}
			if ((category !== '') & (sort !== '') & (rating === '')) {
				let filterdItems = tempState.filter((item) => item.category === category)
				sortedItems = sortAsPerUserIntput(sort, filterdItems)
			}
			if ((rating !== '') & (sort !== '') & (category === '')) {
				let filterdItems = tempState.filter((item) => item.rating.rate >= rating)
				sortedItems = sortAsPerUserIntput(sort, filterdItems)
			}
			if ((rating !== '') & (sort !== '') & (category !== '')) {
				let filterdByCategory = tempState.filter((item) => item.category === category)
				let filterdByRating = filterdByCategory.filter((item) => item.rating.rate >= rating)
				sortedItems = sortAsPerUserIntput(sort, filterdByRating)
			}

			if (jacket || short || tb) {
				tempState = JSON.parse(JSON.stringify(sortedItems))
				const testJacket = jacket ? 'jacket' : ''
				const testShort = short ? 'short' : ''
				const testTb = tb ? 'tb' : ''
				sortedItems = tempState.filter((item) =>
					[testJacket, testShort, testTb].some((e) =>
						e !== '' ? item.title.toLowerCase().includes(e) : false,
					),
				)
			}
			return {
				...state,
				userSelectedProducts: sortedItems,
				userSelectedOptions: action.payload,
			}
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
