/*考勤接口*/
import http from "../untils/http"

/*头部数据*/
export function department() {
	return http({
		url: http.apis("/company/department"),
		method: "get"
	})
}

/*表格数据*/
export function attendances(data) {
	return http({
		url: http.apis(`/attendances?page=${data.page}&pagesize=${data.pagesize}&total=${data.total}`),
		method: "get"
	})
}

/*考勤报表数据*/
export function Atrtgetreport() {
	return http({
		url: http.apis("/attendances/reports"),
		method: "get"
	})
}

/*考勤设置数据*/
export function Attgetsetup(data) {
	return http({
		url: http.apis("/cfg/atte/item"),
		method: "post",
		data
	})
}