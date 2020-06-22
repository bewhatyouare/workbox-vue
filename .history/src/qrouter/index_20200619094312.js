
let Vue;
class Qrouter {
    static install(_Vue){
        Vue = _Vue;//局部变量缓存
        Vue.mixin({
            beforeCreate(){
                Vue.prototype.$qrouter = '自己的路由';
                console.info(this.$options);
                if(this.$options.router){
                    this.$options.router.init();
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
        //1、处理hashchange事件
        this.bindEvents();
        //2、处理路由列表
        this.createRouteMap();
        //
        //
    }
    createRouteMap(){
        this.$options.forEach( item => {
            this.$routeMap.push(item.path,item);
        })
        console.info(this.$routeMap);
    }
    bindEvents(){
        window.addEventListener('hashChange',this.onHashChange.bind(this),false);
        window.addEventListener('load',this.onHashChange.bind(this),false);
    }
    onHashChange(e){
        console.info('hash变了')
    }
}
export default Qrouter;