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

let getTeamDetails = (fileId,params) => {
	return request({
		url:'/team/detail/'+fileId,
		method:"GET",
		params,
	})
}

let createTeam = data => {
	return request({
		url: '/team/create/',
		data,
		method: "POST",
	})
}

let createProject = (data) => {
	return request({
		url: '/project/create/',
		method: "POST",
		data,
	})
}

let getProjectList = params =>{
	return request({
		url:'/project/manage/',
		method:"GET",
		params,
	})
}

let deleteTeamMember = data =>{
	return request({
		url:'/team/del/',
		method:"POST",
		data,
	})
}

export {
	getProjectManageInfo,
	createProject,
	createTeam,
	getTeamList,
	getTeamDetails,
	getProjectList,
	deleteTeamMember,
}
