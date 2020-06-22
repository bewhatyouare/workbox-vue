
let Vue;
class Qrouter {
    static install(_Vue){
        Vue = _Vue;//局部变量缓存
        Vue.mixin({
            beforeCreate(){
                Vue.prototype.$qrouter = '自己的路由'
            }
        })
    };

}
export default Qrouter;