// ajax.send()
// ajax.onreadyststechange = function () {
//     if (ajax.status == 200 & ajax.readyState == 4) {
//         console.log(ajax.response);
        
//     }
// }


// 声明人的类
class People {
    // 类的属性
    constructor(name, age) { // 构造器，实例化方法的时候触发
        this.name = name
        this.age = age
        // 类的方法
        sport(){
            return this.name + '会运动'
        }
    }
}