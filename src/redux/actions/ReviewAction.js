import { ActionTypes } from '../constants/ActionTypes'

export const setReviews = (reviews) => {
	return {
		type: ActionTypes.SET_REVIEW,
		payload: reviews,
	}
}
