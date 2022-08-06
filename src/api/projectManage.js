import request from "@/api/index";

let getProjectManageInfo = data => {
	return request({
		url:'/team/manage/',
		data,
		methods:"GET",
	})
}

export {
	getProjectManageInfo,
}
