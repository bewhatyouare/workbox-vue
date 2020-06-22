
let Vue;
class Qrouter {
    static install(_Vue){
        Vue = _Vue;//局部变量缓存
        Vue.mixin({
            beforeCreate(){
                Vue.prototype.$qrouter = '自己的路由';
                console.info(this.$options);
                if(this.$options.router){
                    this.init();
                }
            }
        })
    };
    constructor(options){
        this.$options = options;
        this.$routeMap = {};
        //使用VUE的响应机制
        this.app = new Vue({
            data:{
                //根目录
                current:'/'
            }
        })
    }
    init(){
        //use的时候启动
        //1、处理hashchange事件
        this.bindEvents();
        //2、处理路由列表
        //
        //
    }
    bindEvents(){
        window.addEventListener('hashChange',this.onHashChange.bind(this),false);
    }
    onHashChange(e){
        console.info('hash变了')
    }
}
export default Qrouter;