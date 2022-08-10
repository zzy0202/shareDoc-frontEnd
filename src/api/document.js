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

let updateDoc = data =>{
	return request({
		url:'/docs/update/',
		method:"POST",
		data,
	})
}

export {
	createDoc,
	getDocumentListFroProject,
	getDocDetails,
	updateDoc
}
