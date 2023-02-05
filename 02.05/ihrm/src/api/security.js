/*社保接口*/
import http from "@/untils/http"

// 部门
export function department() {
	return http({
		url: http.apis("/company/department"),
		method: "get"
	})
}
// 人物
export function securitys() {
	return http({
		url: http.apis("/social_securitys/list"),
		method: "post"
	})
}


/*获取历史归档数据*/
export function getHistory() {
	return http({
		url: http.apis("/social_securitys/historys/2020/list"),
		method: "get"
	})
}

/*获取报表数据*/
export function getMonreport(data) {
	return http({
		url: http.apis(`/social_securitys/historys/202002?month=${data.month}&opType=${data.opType}`),
		method: "get"
	})
}

/*获取详情数据*/
export function getDetail() {
	return http({
		url: http.apis("/social_securitys/payment_item/1084825908823904256"),
		method: "get"
	})
}

/*获取详情数据*/
export function getDetailinfo(data) {
	return http({
		url: http.apis(`/social_securitys/${data}`),
		method: "get"
	})
}