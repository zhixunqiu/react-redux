import fetch from 'isomorphic-fetch'
import { BASEURL, checkStatus } from './index'

export const REQUEST_INFO = 'REQUEST_INFO'
export const RECEIVE_INFO = 'RECEIVE_INFO'
export const REQUEST_MENU = 'REQUEST_MENU'
export const RECEIVE_MENU = 'RECEIVE_MENU'

function requestInfoPosts() {
	return {
		type: REQUEST_INFO
	}
}

function receiveInfoPosts(json) {
	return {
		type: RECEIVE_INFO,
		info: json.data
	}
}

function requestMenuPosts() {
	return {
		type: REQUEST_MENU
	}
}

function receiveMenuPosts(json) {
	return {
		type: RECEIVE_MENU,
		menu: json.data
	}
}

export function initInfo() {
	return dispath => {
		dispath(requestInfoPosts())
		return fetch(`${BASEURL}/getInfo`,{credentials: 'include'})
			.then(response => response.json())
			.then(checkStatus)
			.then(json => dispath(receiveInfoPosts(json)))
			.catch(function(err){
				let msg = err.response&&err.response.msg;
				msg = msg || '失败';
			})
	}
}

export function initMenu() {
	return dispath => {
		dispath(requestMenuPosts())
		return fetch(`${BASEURL}/getMenu`,{credentials: 'include'})
			.then(response => response.json())
			.then(checkStatus)
			.then(json => dispath(receiveMenuPosts(json)))
			.catch(function(err){
				let msg = err.response&&err.response.msg;
				msg = msg || '失败';
			})
	}
}