import { combineReducers } from 'redux'
import{
	REQUEST_INFO,
	RECEIVE_INFO,
	REQUEST_MENU,
	RECEIVE_MENU
} from '../actions/main'
import _ from 'lodash'

function postsForInfo(state = {
	mainIsFetching: false,
	info: {}
},action) {
	switch (action.type) {
		case REQUEST_INFO:
			return _.assign({}, state, {
				mainIsFetching: false
			})
		case RECEIVE_INFO:
		 	return _.assign({}, state , {
			mainIsFetching: true,
			info: action.info
		})
	 	default:
	 		return state
	}
}

function postsForMenu(state = {
	menuIsFetching: false,
	menu: {}
},action) {
	switch (action.type) {
		case REQUEST_MENU:
			return _.assign({}, state, {
				menuIsFetching: false
			})
		case RECEIVE_MENU:
			return _.assign({}, state , {
				menuIsFetching: true,
				menu: action.menu
			})
	 	default:
	 		return state
	}
}

const mainDefaultReducer = combineReducers({
	postsForMenu,
	postsForInfo
})

export default mainDefaultReducer