import request from "@/api/index";

let getProjectManageInfo = params => {
	return request({
		url: '/team/manage/',
		params,
		method: "GET",
	})
}

let getTeamList = params => {
	return request({
		url: '/team/list/',
		method: "GET",
		params,
	})
}

let createProject = (data) => {
	return request({
		url: '/project/create/',
		method: "POST",
		data,
	})
}

let createTeam = data => {
	return request({
		url: '/team/create/',
		data,
		method: "POST",
	})
}


export {
	getProjectManageInfo,
	createProject,
	createTeam,
	getTeamList,
}
