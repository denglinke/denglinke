/*权限接口*/
import http from "@/untils/http"

/*获取用户名*/
export function permission() {
	return http({
		url: http.apis("/sys/permission"),
		method: "get"
	})
}