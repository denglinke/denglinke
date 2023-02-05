/*权限接口*/
import http from "@/untils/http"

/*获取用户名*/
export function permission(data) {
	return http({
		url: http.apis(`/user/process/instance/${data.page}/${ data.pageSize}`),
		method: "put",
		data
	})
}

export function getDetail(data) {
	return http({
		url: http.apis(`/user/process/instance/${data}`),
		method: "get"
	})
}