import request from "@/api/index";

let getProjectManageInfo = params => {
	return request({
		url:'/team/manage/',
		params,
		method:"GET",
	})
}

let createProject = (data) =>{
	return request({
		url:'/project/create/',
		method:"POST",
		data,
	})
}

let createTeam = data =>{
	return request({
		url:'/team/create/',
		data,
		method:"POST",
	})
}

export {
	getProjectManageInfo,createProject,createTeam
}
