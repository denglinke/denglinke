/*登录接口*/
import http from "../http"

export function login(data) {
    return http({
        url: http.apis("/sys/login"),
        method: "post",
        data
    })
}