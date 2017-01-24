export const BASEURL = ''
export function checkStatus(response) {
	if(response.status !== 0){
		var error = new Error(response.msg)
		error.response = response
		throw error
	}else{
		return response
	}
}