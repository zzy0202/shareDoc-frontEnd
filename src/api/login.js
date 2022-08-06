import request from "@/api/index";

let getRegister = (data) => {
	return request({
		url:'/profile/signup/',
		method:"POST",
		data,
	})
}
let getLogin = data =>{
	return request({
		url:'/profile/login/',
		method:"POST",
		data,
	})
}
export {
	getRegister,getLogin
}
