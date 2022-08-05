import request from "@/api/index";

let getRegister = (data) => {
	return request({
		url:'/profile/signup/',
		method:"POST",
		data,
	})
}

export {
	getRegister
}