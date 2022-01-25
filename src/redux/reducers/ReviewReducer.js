import { ActionTypes } from '../constants/ActionTypes'


export const reviewReducer = (state = {}, action) => {
	switch (action.type) {
		case ActionTypes.SET_REVIEW:
			return { ...state, reviews: action.payload }
		default:
			return state
	}
}