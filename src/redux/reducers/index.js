import { combineReducers } from 'redux'
import {
	ProductReducer,
	filterCategoriesReducer,
	productHeaderReducer,
	SelectedProductReducer,
	filterTrendingReducer,
} from './ProductReducer'
import { reviewReducer } from './ReviewReducer'
const reducers = combineReducers({
	allProducts: ProductReducer,
	singleProduct: SelectedProductReducer,
	categories: filterCategoriesReducer,
	titles: productHeaderReducer,
	allReviews: reviewReducer,
	trending: filterTrendingReducer,
})

export default reducers
