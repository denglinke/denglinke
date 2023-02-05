/*员工接口*/
import http from "@/untils/http"

/*获取用户名*/
export const staff = (params) => {
	return http({
		url: http.apis("/sys/user"),
		method: "get",
		params
	})
}