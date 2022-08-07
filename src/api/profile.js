import request from "@/api/index";
import da from "element-ui/src/locale/lang/da";
let getNotice = params =>{
	return request({
		url:'/profile/notices/',
		params,
		method:"GET",
	})
}

let addFriend = data =>{
	return request({
		url:'/profile/add/',
		data,
		method:"POST",
	})
}

let getFriendRequest = params =>{
	return request({
		url:'/profile/notices/',
		params,
		method:"GET",
	})
}

export {
	getNotice,addFriend,getFriendRequest,
}
