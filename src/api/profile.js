import request from "@/api/index";
let getNotice = params =>{
	return request({
		url:'/profile/notices/',
		params,
		methods:"GET",
	})
}

export {
	getNotice,
}
