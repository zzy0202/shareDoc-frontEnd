import request from "@/api/index";

let createDoc = data => {            //创建文档
	return request({
		url: '/docs/create/',
		data,
		method: "POST",
	})
}

let getDocumentListFroProject = (docId, params) => {
	return request({
		method: "GET",
		params,
		url: 'docs/list2/' + docId + '',
	})
}

let getDocDetails = (docId, params) => {
	return request({
		url: '/docs/detail/' + docId,
		method: "GET",
		params,
	})
}

export {
	createDoc,
	getDocumentListFroProject,
	getDocDetails,
}